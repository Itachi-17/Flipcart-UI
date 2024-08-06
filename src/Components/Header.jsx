import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { PiShieldPlus } from "react-icons/pi";
import { BsBox } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { IoMdGift } from "react-icons/io";
import { CiCreditCard2 } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { FaHeadphonesAlt } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FiDownload } from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <div className="flip_logo">
        <img src="Img/flip_logo.svg" alt="Logo" />
      </div>
      <div className="search-inp-icon-sec">
        <CiSearch className="serach-icon" />
        <input
          type="text"
          placeholder="Search for Products, Brands and More"
          className="search-bar"
        />
      </div>
      <div className="links-sec flex gap-[3rem] ml-[3rem]">
        <div className="login-container">
          <div className="login-btn-sec">
            <FaRegUserCircle className="login-user-icon" />
            <p className="login-btn">Login</p>
            <RiArrowDropDownLine className="login-drop-icon" />
          </div>
          <div className="account-dropdown-card">
            <div className="new-cust-sec w-full flex justify-between px-[1.2rem] py-[1rem] border-b-[1px] border-[#bababa]">
              <p className="text-[black] text-[1.7rem]">New Customer?</p>
              <p className="text-[#183bff] text-[1.7rem] font-[500]">Sign up</p>
            </div>
            <div className="item">
              <FaRegUserCircle className="card-item-icon" />
              <p className="card-item-name">My Profiles</p>
            </div>
            <div className="item">
              <PiShieldPlus className="card-item-icon" />
              <p className="card-item-name">Flipcart Plus Zone</p>
            </div>
            <div className="item">
              <BsBox className="card-item-icon" />
              <p className="card-item-name">Orders</p>
            </div>
            <div className="item">
              <GoHeart className="card-item-icon" />
              <p className="card-item-name">Wishlist</p>
            </div>
            <div className="item">
              <IoMdGift className="card-item-icon" />
              <p className="card-item-name">Rewards</p>
            </div>
            <div className="item">
              <CiCreditCard2 className="card-item-icon" />
              <p className="card-item-name">Gift card</p>
            </div>
          </div>
        </div>
        <div className="cart-sec flex gap-2 items-center cursor-pointer">
          <BsCart4 className="text-[black] text-[2rem]" />
          <p className="cart-btn text-[#000000] text-[1.7rem]">Cart</p>
        </div>
        <div className="seller-sec flex gap-2 items-center ml-[2rem] cursor-pointer">
          <BsGift className="text-[black] text-[2rem]" />
          <p className="cart-btn text-[#000000] text-[1.7rem]">
            Become a seller
          </p>
        </div>
      </div>
      <div className="dot3-sec ml-[5rem]">
        <HiOutlineDotsVertical className="dot3-icon" />
        <div className="dot3-dropdown-card">
          <div className="item">
            <GoBell className="item-icons" />
            <p>Notification Preference</p>
          </div>
          <div className="item">
            <FaHeadphonesAlt className="item-icons" />
            <p>24x7 Customer care</p>
          </div>
          <div className="item">
            <GoGraph className="item-icons" />
            <p>Advertise</p>
          </div>
          <div className="item">
            <FiDownload className="item-icons" />
            <p>Download App</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
