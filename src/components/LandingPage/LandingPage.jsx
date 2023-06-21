import React from "react";
import Hero from "./Hero";
import Content from "./Content";
import "./landingpage.css";
import Checkout from "../Checkout/Checkout";
import { Cart } from "../cart/Cart";
import BookSection from "./bookSection";


export default function LandingPage() {
  return (
    <>
      <Hero />
      <Content />

      {/* <Checkout />
      <Cart /> */}
      {/* <div className="my-10">
        <h1 className="text-3xl ml-[13%] text-black">Books Sections</h1>
        <BookSection />

      </div> */}
    </>
  );
}
