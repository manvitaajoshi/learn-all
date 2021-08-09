import React, { useState, useEffect } from "react";
import firebase from "firebase";
import English_YT from './English_YT';
import Math_YT from './Maths_YT';
import Science_YT from './Science_YT';
import Header from './Header';

const Display_Video = () => {
    <>  <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase.js"></script>
    </>

    const [engYTList, setEngYTList] = useState();
    const [mathYTList, setMathYTList] = useState();
    const [sciYTList, setSciYTList] = useState();

    useEffect(() => {
        const linkRef = firebase.database().ref("youtube");
        linkRef.on('value', (snapshot) => {
            const links = snapshot.val();
            const engYTList = [];
            const mathYTList = [];
            const sciYTList = [];
            for (let id in links) {
                if (links[id].subjectName === "English") {
                    engYTList.push({ id, ...links[id] })
                }
            }
            setEngYTList(engYTList);

            for (let id in links) {
                if (links[id].subjectName === "Maths") {
                    mathYTList.push({ id, ...links[id] })
                }
            }
            setMathYTList(mathYTList);

            for (let id in links) {
                if (links[id].subjectName === "Science") {
                    sciYTList.push({ id, ...links[id] })
                }
            }
            setSciYTList(sciYTList);
        });

    }, []);
    return (
        <div style={{ fontFamily: "raleway" }}>
            <Header />
            <div id="summ">
                <details>
                    <summary> <h2 style={{ color: "black" }}>English Videos</h2> <br /></summary>
                    {engYTList ? engYTList.map((link, index) => <English_YT link={link} key={index} />) : ''}
                </details>
                <br />
                <details>
                    <summary> <h2 style={{ color: "black" }}>Maths Videos</h2> <br /></summary>
                    {mathYTList ? mathYTList.map((link, index) => <Math_YT link={link} key={index} />) : ''}
                </details>
                <br />
                <details>
                    <summary> <h2 style={{ color: "black" }}>Science Videos</h2> <br /></summary>
                    {sciYTList ? sciYTList.map((link, index) => <Science_YT link={link} key={index} />) : ''}
                </details>
            </div>
        </div>
    )
}

export default Display_Video
