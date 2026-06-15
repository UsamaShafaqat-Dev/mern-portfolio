import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 👇 Yeh line theek ki hai
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Login from "./pages/Login";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden flex flex-col">
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="/contact"
              element={
                <div className="pt-24 pb-12 min-h-screen bg-background flex flex-col justify-center items-center">
                  <Contact />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
