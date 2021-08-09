import React, { useRef, useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Footer from "./Footer"
import Header from './Header';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                alert("Profile updated successfully!")
                history.push("/")
            })
            .catch(() => {
                //alert("Failed to update account.")
                setError("Failed to update account.")
                
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <>
            <Header />
            <form class="box1" onSubmit={handleSubmit}>
                <h1 style={{ paddingTop: "20px" }}>Update Profile</h1><br />
                {error && <h3 style={{ color: "red" }}>{error}</h3>}
                <input type="email" name="" placeholder="Email" ref={emailRef} defaultValue={currentUser.email} required />
                <h4>Password</h4>
                <input type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same" />
                <h4>Confirm Password</h4>
                <input type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave blank to keep the same" />

                <input type="submit" name="" className="btn1" disabled={loading} value="Update" /><br />
            </form> <br /><br />
            <div>
                <Link to="/student" style={{ color: "black", position: "absolute", top: "100%", right: "48%" }}>Cancel</Link>
            </div>

            <Footer />
        </>
    )
}
