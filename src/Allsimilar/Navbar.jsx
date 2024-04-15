import React from "react";
import style from "../Css/Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className={style.nav1}>
      <div className={style.navdiv1}>
        <img className={style.navimg1}
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt=""
        />
      </div>
      <CiSearch className={style.navsearch}/>
      <div className={style.navdiv2}>
        <input type="text" className={style.navinput1} placeholder="Search for Products, Brands and More"/>
      </div>


      
      <div className={style.navdiv3}>
        <div className={style.accdiv}>
        <RiAccountCircleLine style={{fontSize:"28px"}}/>
        <p className={style.login}>Login</p>
        <FaAngleDown />
        </div>
        <div className={style.cartdiv}>
        <IoCartOutline style={{fontSize:"28px"}}/>
        <p className={style.login}>Cart</p>
        </div>

        <div className={style.selldiv}>
        <img style={{width:"27px"}} src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="" />
        <p className={style.login}>Become a Seller</p>

        </div>
        <div className={style.dotdiv}>
        <img style={{width:"28px"}} src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
