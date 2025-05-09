import Hero from "./assets/components/Hero";
import HowItWorks from  "./assets/components/HowItWorks";
import WhyChooseUs from "./assets/components/WhyChooseUs";
import Testimonials from "./assets/components/Testimonials";
import ContactForm from "./assets/components/ContactForm";
import React from "react";
import DarkModeToggle from "./assets/components/ThemeToggle";

function App() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
<DarkModeToggle   />
    </>
  );
}

export default App;
