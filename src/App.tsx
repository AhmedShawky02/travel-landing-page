import Booking from "./Components/Booking/Booking";
import Destinations from "./Components/Destinations/Destinations";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Logos from "./Components/Logos/Logos";
import Offers from "./Components/Offers/Offers";
import Reviews from "./Components/Reviews/Reviews";
import Subscribe from "./Components/Subscribe/Subscribe";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Offers />
      <Destinations />
      <Booking />
      <Reviews />
      <Logos />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;