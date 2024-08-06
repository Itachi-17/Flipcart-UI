import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const categories = [
  { name: "Top Offer", imgPath: "/Img/Category_Img/cat_img1.webp" },
  { name: "Mobiles & Tablets", imgPath: "/Img/Category_Img/cat_img2.webp" },
  { name: "Tv & Appliances", imgPath: "/Img/Category_Img/cat_img3.webp" },
  { name: "Electronics", imgPath: "/Img/Category_Img/cat_img4.webp" },
  { name: "Fashion", imgPath: "/Img/Category_Img/cat_img5.webp" },
  { name: "Beauty", imgPath: "/Img/Category_Img/cat_img6.webp" },
  { name: "Home & Kitchen", imgPath: "/Img/Category_Img/cat_img7.webp" },
  { name: "Firniture", imgPath: "/Img/Category_Img/cat_img8.webp" },
  { name: "Travel", imgPath: "/Img/Category_Img/cat_img9.webp" },
  { name: "Grocery", imgPath: "/Img/Category_Img/cat_img10.webp" },
];

function CategoryNav() {
  return (
    <nav className="category-nav">
      {categories.map((category, index) => (
        <div key={index} className="category-item-sec">
          <div className="category-img">
            <img src={category.imgPath} alt={category.name} />
          </div>
          <div className="category-name-sec">
            <p>{category.name}</p>
          </div>
        </div>
      ))}
    </nav>
  );
}

export default CategoryNav;
