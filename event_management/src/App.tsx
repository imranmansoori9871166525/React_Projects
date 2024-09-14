import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Footer, GotoTop, NaVbar } from "./components";
import {
  About,
  ContactUs,
  ErrorPage,
  Gallery,
  Home,
  Services,
  SpecificServicesPage,
  TestimonialPage,
} from "./screens";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NaVbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<TestimonialPage />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/specific-services/:id"
            element={<SpecificServicesPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <GotoTop />
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
