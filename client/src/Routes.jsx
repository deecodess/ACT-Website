import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Landing = lazy(() => import("./pages/Landing/Landing.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.jsx"));
const Resources = lazy(() => import("./pages/Resources/Resources.jsx"));
const Submissions = lazy(() => import("./pages/Submissions/Submissions.jsx"));
const Support = lazy(() => import("./pages/Support/Support.jsx"));
const Evaluation = lazy(() => import("./pages/Evaluation/Evaluation.jsx"));
const NavBar = lazy(() => import("./components/Navbar/Navbar.jsx"));

const AppRoute = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Navbar" element={<NavBar />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Submissions" element={<Submissions />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Evaluation" element={<Evaluation />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoute;
