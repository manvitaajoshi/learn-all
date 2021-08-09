import React from 'react'
import Footer from "./Footer"
import Header from './Header'
import { Link } from "react-router-dom"

const filenotfound = () => {
    return (
        <div>
            <Header/>
            <div style={{position:"absolute", top:"30%", left:"20%"}}>
            <h1 style={{color:"red"}}>404</h1>
            <p>Page not found! Looks like you tried to access a page which doesn't exist.</p>
            <Link to="/" style={{color:"black"}}> Go Home</Link>
            </div>
            <Footer />
        </div>
    )
}

export default filenotfound
