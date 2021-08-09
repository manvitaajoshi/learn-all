import React from 'react'
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"

const Math_Books_Tchr = ({ pdf }) => {
    const currentUser = useAuth();
    console.log("del")
    const deletePdf = () => {
        const pdfRef = firebase.database().ref('docs').child(pdf.id);
        const ref = firebase.database().ref('teacher');
        firebase.auth().onAuthStateChanged(function (currentUser) {
            if (currentUser) {
                ref.on('value', (snapshot) => {
                    const users = snapshot.val();
                    for (let id in users) {
                        if (users[id].subject == "Maths" && currentUser.email == users[id].userEmail) {
                            console.log("hello");
                            pdfRef.remove();
                        }
                    }
                })
            } else {
                // No user is signed in.
            }
        });
    };
    return (
        <div>
            <h3 style={{ color: "darkblue" }}>Title: {pdf.bookName} </h3><br />
            <h4>For standard: {pdf.standard} </h4><br />
            <p>Uploaded by: {pdf.uploadedBy} </p><br />
            <a style={{ color: "white", borderRadius: "20px", backgroundColor: "darkblue", padding: "5px 10px", textDecoration: "none" }}
                href={pdf.url} target="_blank">DOWNLOAD</a>
            <br /><br />
            <button style={{ color: "white", bored: "1px solid darkblue", borderRadius: "20px", color: "darkblue", backgroundColor: "white", padding: "5px 10px" }} onClick={deletePdf}>Delete</button>
            <br />
        </div>
    )
}

export default Math_Books_Tchr