import "./App.css";
import { useContext } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Kids from "./Pages/Kids";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Footer from "./Components/Footer/Footer";
import SwipeableCrousal from "./Components/Swiper/SwipeableCrousal";
import { ProductContext } from "./Contexts/ProductContext";
import andre from "./Assests/Andres.png";
import navlogo from "./Assests/navlogo.png";
import Signup from "./Pages/Signup";

function App() {
  const { products } = useContext(ProductContext);
  const slides = [
    "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        {/* <Route path="/login" element={<Signup />} /> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
