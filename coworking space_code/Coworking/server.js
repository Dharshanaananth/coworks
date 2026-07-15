import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

const TEXT_QUERY =
  process.env.GOOGLE_PLACE_TEXT_QUERY ||
  "iCity Co-working Space, Coimbatore";

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACE_ID_ENV = process.env.GOOGLE_PLACE_ID;

let cache = {
  expiresAt: 0,
  value: null,
};

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Google API error ${res.status}: ${text}`);
  }
  return res.json();
}

async function resolvePlaceId() {
  if (PLACE_ID_ENV) return PLACE_ID_ENV;
  if (!API_KEY) throw new Error("Missing GOOGLE_PLACES_API_KEY");

  const url =
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json" +
    `?input=${encodeURIComponent(TEXT_QUERY)}` +
    "&inputtype=textquery" +
    "&fields=place_id" +
    `&key=${encodeURIComponent(API_KEY)}`;

  const data = await fetchJson(url);
  const placeId = data?.candidates?.[0]?.place_id;
  if (!placeId) {
    throw new Error(
      `Could not resolve place_id for query "${TEXT_QUERY}".` +
        ` Status: ${data?.status || "unknown"}`
    );
  }
  return placeId;
}

async function fetchRating() {
  if (!API_KEY) throw new Error("Missing GOOGLE_PLACES_API_KEY");

  const placeId = await resolvePlaceId();
  const url =
    "https://maps.googleapis.com/maps/api/place/details/json" +
    `?place_id=${encodeURIComponent(placeId)}` +
    "&fields=rating,user_ratings_total" +
    `&key=${encodeURIComponent(API_KEY)}`;

  const data = await fetchJson(url);
  const rating = data?.result?.rating;
  const totalReviews = data?.result?.user_ratings_total;

  if (typeof rating !== "number") {
    throw new Error("Google Places response missing rating");
  }

  return {
    rating,
    totalReviews: typeof totalReviews === "number" ? totalReviews : null,
  };
}

app.get("/api/rating", async (req, res) => {
  try {
    const now = Date.now();
    if (cache.value && cache.expiresAt > now) {
      return res.json(cache.value);
    }

    const value = await fetchRating();
    cache = {
      value,
      // Cache for 30 minutes to reduce quota usage
      expiresAt: now + 30 * 60 * 1000,
    };

    return res.json(value);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      error: "Failed to fetch Google rating",
    });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Rating API listening on http://localhost:${PORT}`);
});

