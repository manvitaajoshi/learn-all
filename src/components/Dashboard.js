
import React from "react"
import Content from "./Content"
import Footer from "./Footer"
import Chatbot from "./Chat"
import Header from "./Header"
import '../css/Dashboard.css';
import ScriptTag from 'react-script-tag';

export default function Dashboard() {
    return (
        <>
            <ScriptTag isHydrating={true} type="text/javascript" src="https://kit.fontawesome.com/ab6caf2d21.js" crossOrigin="anonymous" />
            <div style={{fontFamily: "raleway"}} className="dashboard-page">

                <Header authbtn={"register"} />
                <Content />
                <Footer />
            </div>
            <Chatbot />
        </>
    )
}
