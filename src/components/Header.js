import React, { useState } from 'react';
import '../css/Dashboard.css'
import { auth } from '../firebase';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"




export default function Header(props) {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory();

    function handleLogout() {
        setError("")
        try {
            auth.signOut()
            history.push("/login")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="page-navbar">
            <Link to="/"><img class="logo" src="school-logo.png" height="50px" width="50px" /></Link>
            <div className="nav-items highlightTextOut">
                {props.authbtn === "register" ?
                    <>
                        <a id="register" alt="REGISTER"><Link to="/signup">REGISTER</Link></a>
                        <a id="login" alt="LOGIN"><Link to="/login">LOGIN</Link></a> </> :
                    <><button id="logout" style={{ border: "none", fontFamily: "raleway" }} onClick={() => { handleLogout() }}>
                        LOGOUT
                    </button></>
                }
            </div>
        </div>



    );
}