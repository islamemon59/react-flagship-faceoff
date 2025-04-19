import React from "react";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

const Root = () => {
  return (
    <div>
    <Header></Header>
      <div className="min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-2xl mx-auto lg:px-26 md:px-16 px-4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
