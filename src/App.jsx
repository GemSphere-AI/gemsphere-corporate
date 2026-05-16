import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import MainLayout from './layouts/MainLayout';
import './i18n';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Silo Detail Page (Dynamic for Services & Industries)
import DetailPage from './pages/DetailPage';

// Blog Engine
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

// Regional Landings
import RegionalLanding from './pages/RegionalLanding';
import GlobalLanding from './pages/GlobalLanding';

function App() {
  return (
    <HelmetProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            
            {/* SEO Silo: Services */}
            <Route path="services/:id" element={<DetailPage type="service" />} />
            
            {/* SEO Silo: Industries */}
            <Route path="industries/:id" element={<DetailPage type="industry" />} />
            
            {/* Global Lead Engine: Programmatic SEO (177 Countries) */}
            <Route path="global/:countrySlug" element={<GlobalLanding />} />
            
            {/* Legacy redirect or direct landing */}
            <Route path="ae" element={<RegionalLanding region="UAE" />} />
            <Route path="in" element={<RegionalLanding region="India" />} />
            
            {/* Content Engine: Blog */}
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:id" element={<BlogPost />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
