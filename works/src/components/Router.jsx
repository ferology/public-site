import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkOnlyPage from '../pages/WorkOnlyPage.jsx';
import AdidasCaseStudy from '../pages/AdidasCaseStudy.jsx';
import NEODesignSystemCaseStudy from '../pages/NEODesignSystemCaseStudy.jsx';
import ARVRCaseStudy from '../pages/ARVRCaseStudy.jsx';
import UXChangesCaseStudy from '../pages/UXChangesCaseStudy.jsx';
import MobileAppCaseStudy from '../pages/MobileAppCaseStudy.jsx';
import DesignSystemCaseStudy from '../pages/DesignSystemCaseStudy.jsx';
import GraphicDesignPortfolio from '../pages/GraphicDesignPortfolio.jsx';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkOnlyPage />} />
        <Route path="/case-study/adidas-design-system" element={<AdidasCaseStudy />} />
        <Route path="/case-study/neo-design-system" element={<NEODesignSystemCaseStudy />} />
        <Route path="/case-study/ar-vr-experience" element={<ARVRCaseStudy />} />
        <Route path="/case-study/ux-changes" element={<UXChangesCaseStudy />} />
        <Route path="/case-study/mobile-app-interface" element={<MobileAppCaseStudy />} />
        <Route path="/case-study/design-system-components" element={<DesignSystemCaseStudy />} />
        <Route path="/graphic-design" element={<GraphicDesignPortfolio />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

