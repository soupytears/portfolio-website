import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from "./pages/About";
import Home from './pages/Home'
import Projects from './pages/Projects'
import TopBar from './components/Navbar';
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <div className="page-root">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}