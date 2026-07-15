import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop.jsx";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange.jsx";
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhyChoose from "./components/WhyChoose.jsx";
import Pricing from "./components/Pricing.jsx";
import Bottom from './components/Bottom.jsx'; // Landing page Contact section
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx';
import About1 from './pages/About1.jsx';
import WorkSpaces from './pages/WorkSpaces.jsx';
import ContactPage from './pages/Contact.jsx'; // ✅ New full Contact page
import GetPlans from "./pages/Getplans.jsx";
import Partnerships from "./pages/Partnerships.jsx";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Testimonials />
      <Pricing />
      <Bottom /> {/* This is the mini contact section inside landing */}
      <Footer />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <Header />
      <About1 />
      <Footer />
    </>
  );
}

function WorkSpacesPage() {
  return (
    <>
      <Header />
      <WorkSpaces />
      <Footer />
    </>
  );
}

function ContactUsPage() {
  return (
    <>
      <Header />
      <ContactPage /> {/* ✅ Full dedicated Contact page */}
      <Footer />
    </>
  );
}

function PartnershipsPage() {
  return (
    <>
      <Header />
      <Partnerships />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <ScrollToTopOnRouteChange /> 
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
     <Route path="/workspaces" element={<WorkSpacesPage />}>
        <Route path="getplans" element={<GetPlans />} /> {/* nested */}
      </Route>
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/contact" element={<ContactUsPage />} /> {/* ✅ New Route */}
      </Routes>
    </div>
  );
}

export default App;
