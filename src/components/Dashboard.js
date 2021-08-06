
import React, { useState } from "react"
import Content from "./Content"
import Footer from "./Footer"
import { Link, useHistory } from "react-router-dom"
import { auth } from "../firebase"
import Chatbot from "./Chat"
import Home from "./Home"
import Header from "./Header"
import '../css/Dashboard.css';
import ScriptTag from 'react-script-tag';

export default function Dashboard() {



    return (
        <>
            <ScriptTag isHydrating={true} type="text/javascript" src="../javascript/dashboard-js.js" />
            <ScriptTag isHydrating={true} type="text/javascript" src="https://kit.fontawesome.com/ab6caf2d21.js" crossOrigin="anonymous" />




            <div className="dashboard-page">

                <Header authbtn={"register"} />
                <Content />
                <Footer />
            </div>
            <Chatbot />
        </>
    )
}
