import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./components/About/page";
import ServicesSection from "./components/Services/page";
import FeaturesSection from "./components/Features/page";
import PriceSection from "./components/Price/page";
import ShopSection from "./components/shop/page";
import BarberSection from "./components/Barbers/page";
import ContactSection from "./components/Contact/page";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />

      <AboutSection></AboutSection>
      <ServicesSection />
      <FeaturesSection />
      <PriceSection/>
      <ShopSection />
      <BarberSection />
      <ContactSection/>
      <Footer />

    </>
  );
}

export default App;
