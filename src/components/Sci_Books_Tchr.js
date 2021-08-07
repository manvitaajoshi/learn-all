import React from 'react'
import firebase from 'firebase';
import { useAuth } from "../contexts/AuthContext"

const Sci_Books_Tchr = ({ pdf }) => {
    const currentUser = useAuth();
    console.log("del")
    const deletePdf = () => {
        //const storageRef = firebase.storage().ref("docs");
        const pdfRef = firebase.database().ref('docs').child(pdf.id);
        const ref = firebase.database().ref('teacher');
        firebase.auth().onAuthStateChanged(function (currentUser) {
            if (currentUser) {
                //console.log("can u see me")
                ref.on('value', (snapshot) => {
                    const users = snapshot.val();
                    for (let id in users) {
                        //console.log("hiiiiiiiiiiiii");
                        //console.log("hi", currentUser.email);
                        if (users[id].subject == "Science" && currentUser.email == users[id].userEmail) {
                            //console.log(users[id])
                            console.log("hello");
                            pdfRef.remove();
                        }
                    }
                })
            } else {
                // No user is signed in.
            }
        });
        //console.log("id", pdf.id);


    };
    return (
        <div>
            <h2>{pdf.bookName} </h2>
            <h3>{pdf.standard} </h3>
            <h3>{pdf.uploadedBy} </h3>
            {/* <h1>{pdf.id}</h1> */}
            <a href={pdf.url} target="_blank">Download</a>
            <button onClick={deletePdf}>Delete</button>
            <br /><hr /><br />
        </div>
    )
}

export default Sci_Books_Tchr