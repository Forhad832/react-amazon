import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Productslider from "./components/ProductSlider/Productslider";
import Rated from "./components/Rated/Rated";
import Testimonial from "./components/Testimonial/Testimonial";
import AfterBefore from "./components/Virtual/After";


function App() {
  return (
  <div>
    <Navbar />
    <Hero />
    <Productslider />
    <AfterBefore />
    <Features />
    <Rated />
    <Testimonial />
    <Footer/>
  </div>
  );
}

export default App;
