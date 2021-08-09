import React, { useState, useRef } from 'react'
import "firebase/auth"
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Footer from "./Footer"
import Header from './Header';
import "../css/Signup.css"

export default function CRUD() {
    <>  <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase.js"></script>
    </>
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [school, setSchool] = useState("");
    const [standard, setStandard] = useState("");
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    const handleFNameOnChange = (e) => {
        setFname(e.target.value);
    };
    const handleLNameOnChange = (e) => {
        setLname(e.target.value);
    }
    const handlePhoneOnChange = (e) => {
        setPhone(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match.")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            const userRef = firebase.database().ref("student")
            const user = {
                fname,
                lname,
                email,
                phone,
                school,
                standard,
            };
            userRef.push(user);
            history.push("/student")
        } catch (err) {
            console.log(err);
        }

        setLoading(false)
    }



    return (
        <div style={{fontFamily:"raleway"}}>
            <Header/>
            <form className="box" onSubmit={handleSubmit}>
                <br />
                <h1>REGISTER</h1><br />
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <input type="text" onChange={handleFNameOnChange} value={fname} placeholder="First name" required />
                <input type="text" onChange={handleLNameOnChange} value={lname} placeholder="Last name" required />
                <input type="text" onChange={handlePhoneOnChange} value={phone} placeholder="Phone" required />
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" ref={emailRef} value={email} required />
                <input type="text" onChange={(e) => { setSchool(e.target.value) }} placeholder="School" required />
                <input type="text" onChange={(e) => { setStandard(e.target.value) }} placeholder="Standard" required />
                <input type="password" name="" placeholder="Password" ref={passwordRef} required />
                <input type="password" name="" placeholder="Confirm Password" ref={passwordConfirmRef} required />
                <button type="submit" disabled={loading} className="btn1" >Register</button>
             
                Already have an account?  <Link to="/login" style={{ color: "black" }}>Log in</Link>
            </form>
            <Footer />
        </div>
    )
}
