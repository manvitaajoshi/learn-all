import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom"
import "../css/Signup.css"
import Header from './Header';
import Footer from './Footer';

export default function Announcement_Upload() {
    const [standard, setStandard] = useState("");
    const [uploadedBy, setuploadedBy] = useState("");
    const [subjectName, setsubjectName] = useState("");
    const [announcement, setAnnouncement] = useState("");
    const history = useHistory();


    const upload = () => {
        const annRef = firebase.database().ref("announcements");
        const annInfo = {
            announcement,
            uploadedBy,
            subjectName,
            standard,

        };
        annRef.push(annInfo);
        history.push("/admin");
    };

    return (
        <div>
          <Header/>
            <form className="box2">
                <h2>Upload Announcements</h2>
                <input type="text" onChange={(e) => { setsubjectName(e.target.value) }} placeholder="Subject" required />
                <input type="text" onChange={(e) => { setStandard(e.target.value) }} placeholder="For standard" required />
                <textarea onChange={(e) => { setAnnouncement(e.target.value) }} placeholder="Announcement" rows="10" cols="30"></textarea>
                <input type="text" onChange={(e) => { setuploadedBy(e.target.value) }} placeholder="Uploaded By" required />
                <button type="submit" className="btn1" onClick={upload}>Upload</button>
                <br />
            </form>
            <Footer/>
        </div>
    );
}
