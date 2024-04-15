import React from "react";
import Navbar from "../Allsimilar/Navbar";
import style from "../Css/Home.module.css";
import { FaAngleDown } from "react-icons/fa";
import Lswiper from "../Lswiper";
import Pswiper from "../Pswiper";

const Home = () => {
  return (
    <div className={style.go}>
      <Navbar />

      <div className={style.homediv1}>
        <div className={style.homediv2}>
          <div className={style.productdiv}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/29327f40e9c4d26b.png?q=100"
              alt=""
            />
            <p className={style.proname}>Grocery</p>
          </div>
          <div className={style.productdiv}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/22fddf3c7da4c4f4.png?q=100"
              alt=""
            />
            <p className={style.proname}>Mobiles</p>
          </div>
          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/0d75b34f7d8fbcb3.png?q=100"
              alt=""
            />
            <div className={style.inside1}>
              <p className={style.proname}>Fashion</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>

          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/69c6589653afdb9a.png?q=100"
              alt=""
            />
            <div className={style.inside1}>
              <p className={style.proname}>Electronics</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>
          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/ab7e2b022a4587dd.jpg?q=100"
              alt=""
            />

            <div className={style.inside1}>
              <p className={style.proname}>Home & Furniture</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>
          <div className={style.productdiv}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/0139228b2f7eb413.jpg?q=100"
              alt=""
            />
            <p className={style.proname}>Appliances</p>
          </div>
          <div className={style.productdiv}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/71050627a56b4693.png?q=100"
              alt=""
            />
            <p className={style.proname}>Travel</p>
          </div>
          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/flap/70/70/image/dff3f7adcf3a90c6.png?q=100"
              alt=""
            />

            <div className={style.inside1}>
              <p className={style.proname}>Beauty & Toys</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>
          <div className={style.productdiv2}>
            <img
              className={style.productimg}
              src="https://rukminim2.flixcart.com/fk-p-flap/70/70/image/05d708653beff580.png?q=100"
              alt=""
            />

            <div className={style.inside1}>
              <p className={style.proname}>Two Wheelers</p>
              <FaAngleDown className={style.downarrow} />
            </div>
          </div>
        </div>

        <Lswiper />

        <div className={style.smallpro3}>
          <p className={style.pa1}>Best Deals on Smartphones</p>
          <Pswiper />

          <div className={style.flyingdiv}>
            <img style={{width:"100%",height:"300px"}}
              src="https://rukminim1.flixcart.com/fk-p-flap/530/810/image/9845b97107ced583.png?q=20"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
