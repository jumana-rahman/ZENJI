import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ComingSoon from "./pages/ComingSoon";

// ── Scroll to top on route change ─────────────────────────────────────────────

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (_product) => {
    setCartCount((c) => c + 1);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <ScrollToTop />
      <AnnouncementBar />
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
        <Route path="/shop" element={<Shop onAddToCart={handleAddToCart} />} />
        <Route path="/collections" element={<ComingSoon title="Collections" />} />
        <Route path="/lookbook" element={<ComingSoon title="Lookbook" />} />
        <Route path="/about" element={<ComingSoon title="About" />} />
        <Route path="*" element={<ComingSoon title="Page Not Found" />} />
      </Routes>
      <Footer />
    </div>
  );
}
