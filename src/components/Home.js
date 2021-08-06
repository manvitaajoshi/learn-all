import React, { useState } from 'react';
import Chatbot from './Chat';
import Footer from './Footer';
import Content from './Content';
import { auth } from "../firebase"
import { Link, useHistory } from "react-router-dom"
import Header from './Header';
import "../css/Dashboard.css"


export default function Home() {




    return (
        <>
            <div className="dashboard-page">
                <button className="btn btn-warning contribute">
                    <Link to="/volunteerEventDisplay">Contribute</Link>
                </button>

                <Header authbtn={"logout"} />


                <Content />
                <Footer />

            </div>
            <Chatbot />
        </>
    )
}