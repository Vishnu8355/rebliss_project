import React from "react";
import HomeCarousel from "./HomeCarousel";
import Homebody from "./components/Homebody";

function Home() {
    return (
        <div className="home">
            <HomeCarousel />
            <Homebody />
        </div>
    );
}

export default Home;
