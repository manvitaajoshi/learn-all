import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';

export default function Upload_Video() {
    const [link, setLink] = useState("");
    const [uploadedBy, setuploadedBy] = useState("");
    const [subjectName, setsubjectName] = useState("");
    const [standard, setStandard] = useState("");
    const [title, setTitle] = useState("");
    const history = useHistory();

    const upload = () => {
        const pdfRef = firebase.database().ref("youtube");
        const pdfInfo = {
            link,
            uploadedBy,
            subjectName,
            standard,
            title
        };
        pdfRef.push(pdfInfo);
        history.push("/admin");
    };

    return (
        <div>
            <Header />
            <form className="box2">
                <h2>Upload Video Link</h2>
                <br />
                <input type="text" onChange={(e) => { setsubjectName(e.target.value) }} placeholder="Subject" required />
                <input type="text" onChange={(e) => { setStandard(e.target.value) }} placeholder="For standard" required />
                <input type="text" onChange={(e) => { setTitle(e.target.value) }} placeholder="Video Title" required />
                <input type="text" onChange={(e) => { setLink(e.target.value) }} defaultValue="https://www.youtube.com/embed/" required />
                <input type="text" onChange={(e) => { setuploadedBy(e.target.value) }} placeholder="Uploaded By" required />
                <button type="submit" className="btn1" onClick={upload}>Upload</button>
            </form>
            <Footer />
        </div>
    );
}
