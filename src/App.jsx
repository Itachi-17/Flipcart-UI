import React from "react";
import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
import CategoryNav from "./Components/CategoryNav";
import "./Components/Components.css";
import "./index.css";
import BestDeal from "./Components/BestDeal";
import ProductBanner from "./Components/ProductBanner";
import FeaturedBrands from "./Components/FeaturedBrands";

function App() {
  return (
    <div className="App">
      <div className="wrapper flex flex-col items-center w-full">
        <Header />
        <CategoryNav />
        <Carousel />
        <BestDeal />
        <ProductBanner />
        <FeaturedBrands />
      </div>
    </div>
  );
}

export default App;
