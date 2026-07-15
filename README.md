# iCity Co-working Space Website

A modern, responsive website for **iCity Co-working Space**, built using **React.js** and **Express.js**. The website showcases the workspace, services, contact information, and dynamically displays Google ratings using the Google Places API.

---

## 🚀 Features

- Responsive React frontend
- Express.js backend API
- Live Google Business Rating integration
- Google Places API support
- Contact form integration
- EmailJS & Nodemailer support
- Modern animations using Framer Motion
- Bootstrap 5 UI
- SEO-friendly architecture

---

## 🛠 Tech Stack

### Frontend

- React 18
- React Router DOM
- Bootstrap 5
- Bootstrap Icons
- React Bootstrap
- Framer Motion
- React Icons
- React Lazy Load

### Backend

- Node.js
- Express.js
- CORS
- Dotenv

### APIs & Services

- Google Places API
- Google Maps Place Details API
- EmailJS
- Nodemailer

---

## 📂 Project Structure

```
icity-landing/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.js
│   └── index.js
│
├── server.js
├── package.json
├── .env
├── README.md
└── package-lock.json
```

---

## ⚙ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/icity-landing.git
```

Go into the project folder

```bash
cd icity-landing
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

Example:

```env
PORT=5000

GOOGLE_PLACES_API_KEY=YOUR_GOOGLE_API_KEY

GOOGLE_PLACE_ID=YOUR_PLACE_ID

GOOGLE_PLACE_TEXT_QUERY=iCity Co-working Space, Coimbatore
```

---

## ▶ Running the Project

### Start React

```bash
npm start
```

Runs on

```
http://localhost:3000
```

---

### Start Backend

```bash
npm run server
```

Runs on

```
http://localhost:5000
```

---

## Available Scripts

```bash
npm start
```

Runs the React development server.

```bash
npm run build
```

Creates the production build.

```bash
npm test
```

Runs tests.

```bash
npm run server
```

Starts the Express backend.

---

## API Endpoints

### Health Check

```
GET /api/health
```

Response

```json
{
  "ok": true
}
```

---

### Google Rating

```
GET /api/rating
```

Example Response

```json
{
  "rating": 4.8,
  "totalReviews": 120
}
```

---

## Dependencies

Major packages used:

- React
- Express
- Bootstrap
- Framer Motion
- Google APIs
- Nodemailer
- EmailJS
- React Router
- Dotenv
- CORS

---

## Deployment

Build the React application

```bash
npm run build
```

Deploy the generated **build/** folder along with the Express backend to your preferred hosting provider.

---

## Future Enhancements

- Admin Dashboard
- Booking System
- Membership Management
- Event Management
- Online Payments
- Blog Module
- Analytics Dashboard

---

## Author

**iCity Technologies**

Website: https://icitytechnologies.com

Location:
Coimbatore, Tamil Nadu, India

---

## License

This project is licensed under the MIT License.

---

### Built with ❤️ by icity Technologies
