import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import logo from "../images/logo.png";

function Whatsapp() {
    return (
        <div>
            <WhatsAppWidget
                phoneNo="919289046988"
                position="right"
                widgetWidth="300px"
                widgetWidthMobile="260px"
                autoOpen={false}
                messageBox={true}
                iconSize="40"
                iconColor="white"
                iconBgColor="#009292"
                headerIcon={logo}
                headerIconColor="pink"
                headerTxtColor="black"
                headerBgColor="#009292"
                headerTitle="reBLISS"
                headerCaption="Online"
                bodyBgColor="rgb(240,240,240)"
                chatPersonName="Support"
                chatMessage={
                    <>
                        Hi there 👋 <br />
                        <br />
                        How can I help you?
                    </>
                }
                footerBgColor="#009292"
                btnBgColor="#1d5871"
                btnTxtColor="white"
                btnTxt="Start Chat"
            />
        </div>
    );
}

export default Whatsapp;
