import React, { useState, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Hero from "../../Hero/Hero";
import Footer from "../../Footer/Footer";
import DarkNav from "../../Navbar/DarkNav";

const HomeView = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isWindow, setIsWindow] = useState(window)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isScrolled ? (
        <div className="fixed top-0 left-0 right-0 z-50 transition-transform duration-900 transform -translate-y-0">
          <DarkNav />
        </div>
      ) : (
        <Navbar />
      )}

      <Hero />
      <Footer />
    </div>
  );
};

export default HomeView;
