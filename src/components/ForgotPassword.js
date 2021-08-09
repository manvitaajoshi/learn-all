import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from './Header';

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
            alert("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
            alert("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <>
        <Header/>
            <form class="box1" onSubmit={handleSubmit}>
                <h1 style={{ paddingTop: "20px" }}>Password Reset</h1><br />
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <input type="email" name="" placeholder="Email" ref={emailRef} required />
                <input type="submit" name="" className="btn1" disabled={loading} value="Reset Password" /><br />
            </form> <br /><br />
            <div>
                <Link to="/login" style={{ color: "black", position: "absolute", top: "70%", right: "48%" }}>Login</Link>
            </div>
            <div style={{ position: "absolute", top: "80%", right: "39%" }}>
                Don't have an account? <Link to="/signup" style={{ color: "black", }}>Register</Link>
            </div>
            <Footer/>
        </>
    )
}