import React from "react";
import { Outlet } from "react-router";
import Footer from "../../componants/footer";
import Navbar from "../../componants/navbar";
import ErrorPage from "../ErrorPage/ErrorPage";

const Root =() => {
    return(
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;