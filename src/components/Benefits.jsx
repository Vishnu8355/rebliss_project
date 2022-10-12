import React from "react";
import "./Benefits.css";
import WebhookSharpIcon from "@mui/icons-material/WebhookSharp";
import top from "../images/IMAGES/top.png";
import mid from "../images/IMAGES/mid.png";
import tsmMobile from "../images/IMAGES/tsmMobile.png";
import saathiM from "../images/IMAGES/saathiM.png";
import merchantM from "../images/IMAGES/merchantM.png";
import tsmGirl from "../images/IMAGES/tsmGirl.png";
import saathiGirl from "../images/IMAGES/saathiGirl.png";
import merchantGirl from "../images/IMAGES/merchantGirl.png";
import partnerGirl from "../images/IMAGES/partnerGirl.png";
import partnerM from "../images/IMAGES/partnerM.png";

function Benefits() {
    return (
        <div className="benefits">
            <h1 className="benefits_h1">Benefits of Joining reBLISS</h1>

            <div className="benefits_points">
                <div
                    className="benefits_Sathi benefits_pointsSection"
                    id="saathi"
                >
                    <div className="benefits_Info">
                        <span className="benefits_Underline">SAATHI</span>
                        <h1>
                            <WebhookSharpIcon />
                            reBLISS के साथ , जितनी मेहनत उतनी कमाई...
                        </h1>

                        <h1>
                            <WebhookSharpIcon /> Zero investment
                        </h1>
                        <h1>
                            <WebhookSharpIcon /> Skill oriented tasks
                        </h1>
                        <h1>
                            <WebhookSharpIcon /> Training and upskilling
                        </h1>
                        <h1>
                            <WebhookSharpIcon /> Shortest Payout cycle
                        </h1>
                    </div>

                    <div className="benefitsImg">
                        <img className="last" src={mid} alt="circle1" />
                        <img className="front" src={top} alt="circle2" />
                        <img className="Mobile saathiM" src={saathiM} alt="" />
                        <img className="Girl saathiG" src={saathiGirl} alt="" />
                    </div>
                </div>

                <div className="benefits_Tsm benefits_pointsSection">
                    <div className="benefitsImg">
                        <img className="last" src={mid} alt="circle1" />
                        <img className="front" src={top} alt="circle2" />
                        <img className="Mobile tsmM" src={tsmMobile} alt="" />
                        <img className="Girl tsmG" src={tsmGirl} alt="" />
                    </div>

                    <div className="benefits_Info">
                        <span className="benefits_Underline">TSM</span>
                        <h1>
                            <WebhookSharpIcon />
                            Your own business in your own city
                        </h1>
                        <h1>
                            <WebhookSharpIcon /> From job seeker to job provider
                        </h1>
                        <h1>
                            <WebhookSharpIcon /> Skill oriented tasks
                        </h1>
                        <h1>
                            <WebhookSharpIcon /> Commission-based income
                        </h1>
                    </div>
                </div>

                <div className="benefits_Partner benefits_pointsSection">
                    <div className="benefits_Info">
                        <span className="benefits_Underline">PARTNER</span>
                        <h1>
                            <WebhookSharpIcon /> Networking in multiple cities
                        </h1>
                        <h1>
                            <WebhookSharpIcon /> Supervision of saathis on a
                            large scale
                        </h1>
                        <h1>
                            <WebhookSharpIcon /> Commission-based income
                        </h1>
                    </div>
                    <div className="benefitsImg">
                        <img className="last" src={mid} alt="circle2" />
                        <img className="front" src={top} alt="circle1" />
                        <img
                            className="Mobile partnerM"
                            src={partnerM}
                            alt=""
                        />
                        <img
                            className="Girl partnerG"
                            src={partnerGirl}
                            alt=""
                        />
                    </div>
                </div>

                <div className="benefits_Merchant benefits_pointsSection">
                    <div className="benefitsImg">
                        <img className="last" src={mid} alt="circle2" />
                        <img className="front" src={top} alt="circle1" />
                        <img
                            className="Mobile merchantM"
                            src={merchantM}
                            alt=""
                        />
                        <img
                            className="Girl merchantG"
                            src={merchantGirl}
                            alt=""
                        />
                    </div>
                    <div className="benefits_Info">
                        <span className="benefits_Underline">MERCHANT</span>
                        <h1>
                            <WebhookSharpIcon />
                            Diverse products
                        </h1>
                        <h1>
                            <WebhookSharpIcon />
                            Collaborations with established brands
                        </h1>
                        <h1>
                            <WebhookSharpIcon />
                            Customer service support
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Benefits;
