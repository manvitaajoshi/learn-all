import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Announcement_Display_Student from './Announcement_Display_Student';
import Header from './Header';

const Announcement_Display = () => {
    <>  <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase.js"></script>
    </>

    const [annList, setAnnList] = useState();

    useEffect(() => {
        const pdfRef = firebase.database().ref("announcements");
        pdfRef.on('value', (snapshot) => {
            const anns = snapshot.val();
            const annList = [];
            for (let id in anns) {
                annList.push({ id, ...anns[id] })
            }
            setAnnList(annList);
        });
    }, []);

    return (
        <div>
            <Header/>
             <h1 style={{ color: "black", textAlign:"center", paddingTop:"100px", paddingLeft:"250px" }}>Announcements</h1> <br />
            <div style={{ color: "black", paddingLeft: "250px", width:"600px", textAlign:"justify" }}>
            {annList ? annList.map((ann, index) => <Announcement_Display_Student ann={ann} key={index} />) : ''}
            </div>
        </div>
    )
}

export default Announcement_Display
