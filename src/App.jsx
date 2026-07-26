import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Benefits from "./pages/Benefits"
import HowItWorks from "./pages/HowItWorks"
import Testimonials from "./pages/Testimonials"
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Benefits />} />
        {/* <Route path="/benefits" element={<Benefits />} /> */}
        <Route path="/HowItWorks" element={<HowItWorks />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;