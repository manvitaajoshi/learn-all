import React from "react";
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";

const Student = () => {
    <>  <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase.js"></script>
    </>

    return (
        <div style={{ fontFamily: "raleway" }}>
            <Header />
            <br /><br /><br /><br /><br />
            <div className="student">
                <a id="studentpage1"><Link to="/view_books_student" style={{ textDecoration: "none", color: "white" }}>View Books</Link></a> <br /><br /><br />
                <a id="studentpage2"><Link to="/view_announcement" style={{ textDecoration: "none", color: "white" }}>View Announcements</Link></a><br /><br /><br />
                <a id="studentpage3"><Link to="/display_video" style={{ textDecoration: "none", color: "white" }}>Watch Videos</Link></a><br /><br /><br />
                <a id="studentpage4"><Link to="/quiz_english" style={{ textDecoration: "none", color: "white" }}>Take English Quiz</Link> </a ><br /><br /><br />
                <a id="studentpage5"><Link to="/quiz_maths" style={{ textDecoration: "none", color: "white" }}>Take Maths Quiz</Link> </a ><br /><br /><br />
                <a id="studentpage6"><Link to="/quiz_science" style={{ textDecoration: "none", color: "white" }}> Take Science Quiz</Link ></a > <br /><br /><br />
                <a id="studentpage7"><Link to="/update_profile" style={{ textDecoration: "none", color: "white" }}> Update Profile</Link ></a > <br /><br /><br />
            </div>
            <Footer />
        </div>
    )
}

export default Student
