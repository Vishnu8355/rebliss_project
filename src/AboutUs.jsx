import React from "react";
import "./AboutUs.css";
import Ourteam from "./components/Ourteam";

function AboutUs() {
    return (
        <div className="aboutus">
            <div className="aboutus_para">
                <h1>ABOUT US</h1>
                <p>
                    reBLISS is your one-stop destination for freelancing. We
                    understand that seeking jobs door to door is exhausting and
                    hectic. Hence, we here at reBLISS, a B2B company provides
                    you freelancing opportunities.
                </p>
                <p>
                    reBLISS is the platform mediating between the In-demand
                    partners looking for gig workforce and full-timers/
                    part-timers / freelancers looking for jobs based on their
                    skillset. <br />
                    We essentially manage workforce in a way that aims to help
                    job providers fulfill their workforce requirements
                    effectively and efficiently.
                </p>
                <h2>
                    So Get Set Go…Work Anytime, Anywhere and get Limitless
                    Earning opportunities .
                </h2>
            </div>
            <Ourteam />
        </div>
    );
}

export default AboutUs;
