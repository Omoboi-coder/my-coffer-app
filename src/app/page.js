"use client";
import Hero from "./Components/Hero";
import Payment from "./Components/Payment";
import Expertise from "./Components/Expertise";
import Features from "./Components/Features";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Payment />
    <Expertise />
    <Features />
    <AboutUs />
    <ContactUs />
    <Footer />
    </>
  );
}
