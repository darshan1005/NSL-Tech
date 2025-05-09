import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enquiry from "./components/Enquiry"
import MediaHeader from "./components/MediaHeader"
import NavBar from "./components/NavBar"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Consulting from "./pages/servicePages/Consulting";
import Development from "./pages/servicePages/Developement";
import Freelancing from "./pages/servicePages/Freelancing";
import Trainings from "./pages/servicePages/Tranings";
import WorkWithUs from "./pages/WorkWithUs";

const App = () => {

  return (
    <>
      <Router>
        <MediaHeader />
        <NavBar />
        <ScrollToTop />
        <Enquiry />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/contuctus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/workwithus" element={<WorkWithUs />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/freelacing" element={<Freelancing />} />
          <Route path="/services/trainigs" element={<Trainings />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
