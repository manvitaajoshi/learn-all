import React from "react";
import { Link } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';
export default function Teacher() {

    return (
        <div>
            <div style={{ fontFamily: "raleway" }}>
                <Header />
                <br /><br /><br /><br /><br />
                <div className="student">
                    <a id="studentpage1"><Link to="/upload_books" style={{ textDecoration: "none", color: "white" }}>Upload Book</Link></a> <br /><br /><br />
                    <a id="studentpage2"><Link to="/view_books" style={{ textDecoration: "none", color: "white" }}>View Books</Link></a><br /><br /><br />
                    <a id="studentpage3"><Link to="/upload_announcement" style={{ textDecoration: "none", color: "white" }}>Upload Announcement</Link> </a ><br /><br /><br />
                    <a id="studentpage4"><Link to="/upload_video" style={{ textDecoration: "none", color: "white" }}>Upload Video</Link> </a ><br /><br /><br />
                </div>
               
                <Footer />
            </div>
        </div>
    );
}
