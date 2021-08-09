import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../css/Signup.css"
import Footer from "./Footer"
import Header from "./Header"

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/student")
        }
        catch {
            setError("Failed to log in.")
            console.log("Failed to log in.")
        }
        setLoading(false)
    }

    async function adminLogin(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            if (emailRef.current.value === "profjoshi@gmail.com" || emailRef.current.value === "profpatel@gmail.com"
                || emailRef.current.value === "profchatterjee@gmail.com") {
                await login(emailRef.current.value, passwordRef.current.value)
                history.push("/admin");
            }
        } catch {
            setError("Invalid Login")
        }
        setLoading(false)
    }

    return (
        <div style={{ fontFamily: "raleway" }}>
            <Header />
            <form class="box1" onSubmit={handleSubmit}>
                <h1 style={{ paddingTop: "20px" }}>LOGIN</h1><br />
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <input type="email" name="" placeholder="Email" ref={emailRef} required />
                <input type="password" name="" placeholder="Password" ref={passwordRef} required />
                <input type="submit" name="" className="btn1" disabled={loading} value="Login" /><br />
            </form> <br /><br />
            <div style={{ position: "absolute", top: "75%", right: "41%" }}>
                <button className="btn1" onClick={adminLogin}>
                    Login as a Teacher
                </button>
            </div>
            <div>
                <Link to="/forgot-password" style={{ color: "black", position: "absolute", top: "90%", right: "45%" }}>Forgot Password?</Link>
            </div>
            <div style={{ position: "absolute", top: "100%", right: "41%" }}>
                Don't have an account? <Link to="/signup" style={{ color: "black", }}>Register</Link>
            </div>
            <Footer />
        </div>
    )
}