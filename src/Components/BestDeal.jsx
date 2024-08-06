import React from "react";

const BestDeal = () => {
  const phones = [
    {
      name: "Realme P1 5g",
      price: "From ₹14,999",
      image: "/Img/Best_Deal/best_deal1.png",
    },
    {
      name: "vivo T2 Pro 5g",
      price: "From ₹20,999*",
      image: "/Img/Best_Deal/best_deal2.png",
    },
    {
      name: "Poco M6 Pro 5G",
      price: "From ₹9,249*",
      image: "/Img/Best_Deal/best_deal3.png",
    },
    {
      name: "Redmi 12 5G",
      price: "Just ₹9,999*",
      image: "/Img/Best_Deal/best_deal4.webp",
    },
    {
      name: "Moto Edge 50 Fusion",
      price: "From ₹20,999*",
      image: "/Img/Best_Deal/best_deal5.webp",
    },
    {
      name: "Realme P1 Pro 5G",
      price: "Just ₹20,999",
      image: "/Img/Best_Deal/best_deal6.webp",
    },
  ];

  return (
    <div className="best-deals-wrapper">
      <p className="text-[2.4rem] font-[500]">Best Deal For Smartphones</p>
      <div className="best-deals-card-wrapper">
        {phones.map((phone, index) => (
          <div key={index} className="best-deals-card">
            <div className="best-deals-img">
              <img src={phone.image} alt={phone.name} />
            </div>
            <h3>{phone.name}</h3>
            <p>{phone.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestDeal;
