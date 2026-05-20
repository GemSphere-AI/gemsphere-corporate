import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import './i18n';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

// Products & Solutions
import Products from './pages/Products';
import Solutions from './pages/Solutions';
import AISolutions from './pages/AISolutions';
import Services from './pages/Services';
import Industries from './pages/Industries';

// Dynamic Content Pages
import DetailPage from './pages/DetailPage';

// Blog Engine
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

// Regional Landings
import RegionalLanding from './pages/RegionalLanding';
import GlobalLanding from './pages/GlobalLanding';

// Legal Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

function App() {
  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="careers" element={<Careers />} />
            
            {/* New Ecosystem Pages */}
            <Route path="products" element={<Products />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="ai-solutions" element={<AISolutions />} />
            <Route path="services" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            
            {/* Dynamic Silos (Kept for SEO / Deep Linking) */}
            <Route path="services/:id" element={<DetailPage type="service" />} />
            <Route path="industries/:id" element={<DetailPage type="industry" />} />
            <Route path="case-studies" element={<DetailPage type="case_study_list" />} />
            
            {/* Global Lead Engine */}
            <Route path="global/:countrySlug" element={<GlobalLanding />} />
            
            {/* Legacy redirect or direct landing */}
            <Route path="ae" element={<RegionalLanding region="UAE" />} />
            <Route path="in" element={<RegionalLanding region="India" />} />
            
            {/* Content Engine: Blog */}
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:id" element={<BlogPost />} />

            {/* Legal Pages */}
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
