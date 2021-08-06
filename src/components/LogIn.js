import React, { useRef, useState } from "react";
//import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory, Redirect } from "react-router-dom";
import "../css/Signup.css";
import firebase from "../firebase";
import Footer from "./Footer";

export default function Login() {
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			await login(emailRef.current.value, passwordRef.current.value);
			history.push("/");
		} catch {
			console.log("Failed to log in.");
		}
		setLoading(false);
	}

	const adminLogin = () => {
		// firebase.database().ref("teacher").push({
		//     userEmail: "profjoshi@gmail.com",
		//     password: "joshi"
		// })
		const ref = firebase.database().ref("teacher");
		ref.on("value", (snapshot) => {
			const users = snapshot.val();
			for (let id in users) {
				if (
					users[id].userEmail == emailRef.current.value &&
					users[id].password == passwordRef.current.value
				) {
					history.push("/admin");
				}
			} //
		});
	};

	return (
		<>
			{/* 
            <div className="admin" style={
                {color:"black"}
            }>
                <button onClick={() => {
                    adminLogin();
                }}>
                    Admin Login no dont just save and keep going to the page browser bro wtf
                </button>
            </div> */}

			<form class="box1" onSubmit={handleSubmit}>
				<h1 style={{ paddingTop: "20px" }}>LOGIN</h1>
				<br />
				{error && <h3 style={{ color: "red" }}>{error}</h3>}
				<input
					type="email"
					name=""
					placeholder="Email"
					ref={emailRef}
					required
				/>
				<input
					type="password"
					name=""
					placeholder="Password"
					ref={passwordRef}
					required
				/>
				<br />
				<input
					type="submit"
					name=""
					className="btn1"
					disabled={loading}
					value="Login"
				/>
				<br />
			</form>
			<div style={{ position: "absolute", top: "430px", right: "385px" }}>
				<button
					className="btn1"
					onClick={() => {
						adminLogin();
					}}
				>
					Login as a Teacher
				</button>
			</div>
			<div>
				<Link
					to="/forgot-password"
					style={{
						color: "black",
						position: "absolute",
						top: "510px",
						right: "430px",
					}}
				>
					Forgot Password?
				</Link>
			</div>
			<div style={{ position: "absolute", top: "550px", right: "350px" }}>
				Don't have an account?{" "}
				<Link to="/signup" style={{ color: "black" }}>
					Register
				</Link>
			</div>
			<Footer />
		</>
	);
}
