import React, { } from "react";
import Header from "../components/Header";
import NotFound from "../components/NotFound";
import Footer from "../components/Footer";


export default function HomePage () {
    return (
        
        <div className="MainDiv">
            <Header />
            <NotFound />
            <Footer />
        </div>
    
    );
}