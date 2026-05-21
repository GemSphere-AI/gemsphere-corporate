/*
 * Copyright (c) 2026 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import './i18n';

// Core Pages
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Careers from './views/Careers';

// Products & Solutions
import Products from './views/Products';
import Solutions from './views/Solutions';
import AISolutions from './views/AISolutions';
import Services from './views/Services';
import Industries from './views/Industries';

// Dynamic Content Pages
import DetailPage from './views/DetailPage';

// Blog Engine
import BlogList from './views/BlogList';
import BlogPost from './views/BlogPost';

// Regional Landings
import RegionalLanding from './views/RegionalLanding';
import GlobalLanding from './views/GlobalLanding';

// Legal Pages
import PrivacyPolicy from './views/PrivacyPolicy';
import CookiePolicy from './views/CookiePolicy';

const ExternalRedirect = ({ to }) => {
  React.useEffect(() => {
    window.location.href = to;
  }, [to]);
  return null;
};

function App() {
  return (
    <React.Fragment>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            
            {/* Redirect any locale prefixed login to root login */}
            <Route path=":lang/login" element={<ExternalRedirect to="/login" />} />
            <Route path=":lang/register" element={<ExternalRedirect to="/register" />} />
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
    </React.Fragment>
  );
}

export default App;
