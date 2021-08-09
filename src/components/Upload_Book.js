import React, { useState } from "react";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router-dom"
import Header from './Header';
import Footer from './Footer';

export default function Upload_Book() {
    const [pdf, setPdf] = useState(""); 
    const [url, setUrl] = useState("");
    const [bookName, setbookName] = useState("");
    const [uploadedBy, setuploadedBy] = useState("");
    const [subjectName, setsubjectName] = useState("");
    const [standard, setStandard] = useState("");
    const history = useHistory();

    const upload = () => {
        const id = uuid();
        const pdfRef = firebase.database().ref("docs");
        if (pdf == null) return;
        firebase
            .storage()
            .ref("docs")
            .child(id)
            .put(pdf)
            .on(
                "state_changed",
                alert("Material uploaded successfully!"),
                alert,
                () => {
                    firebase
                        .storage()
                        .ref("docs")
                        .child(id)
                        .getDownloadURL()
                        .then((url) => {
                            setUrl(url);
                            const pdfInfo = {
                                bookName,
                                uploadedBy,
                                subjectName,
                                standard,
                                url

                            };
                            pdfRef.push(pdfInfo);
                        });

                }
            );
        history.push("/admin");
    };

    return (
        <div>
            <Header />
            <form className="box2">
                <h2>Upload Study Material</h2>
                <br />
                <input
                    type="file"
                    onChange={(e) => {
                        setPdf(e.target.files[0]);
                    }}
                />
                <input type="text" onChange={(e) => { setsubjectName(e.target.value) }} placeholder="Subject" required />
                <input type="text" onChange={(e) => { setStandard(e.target.value) }} placeholder="For standard" required />
                <input type="text" onChange={(e) => { setbookName(e.target.value) }} placeholder="Book Name" required />
                <input type="text" onChange={(e) => { setuploadedBy(e.target.value) }} placeholder="Uploaded By" required />
                <button type="submit" className="btn1" onClick={upload}>Upload</button>
            </form>
            <Footer />
        </div>
    );
}
