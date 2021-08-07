import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Eng_Books_Tchr from './Eng_Books_Tchr';
import Math_Books_Tchr from './Math_Books_Tchr';
import Sci_Books_Tchr  from './Sci_Books_Tchr';

const Student = () => {
    <>  <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-database.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.2.3/firebase.js"></script>
    </>

    const [engPdfList, setEngPdfList] = useState();
    const [mathPdfList, setMathPdfList] = useState();
    const [sciPdfList, setSciPdfList] = useState();

    useEffect(() => {
        const pdfRef = firebase.database().ref("docs");

        pdfRef.on('value', (snapshot) => {
            const pdfs = snapshot.val();
            const engPdfList = [];
            const mathPdfList = [];
            const sciPdfList = [];
            for (let id in pdfs) {
                if (pdfs[id].subjectName === "English") {
                    engPdfList.push({ id, ...pdfs[id] })
                }
            }
            setEngPdfList(engPdfList);

            for (let id in pdfs) {
                if (pdfs[id].subjectName === "Maths") {
                    mathPdfList.push({ id, ...pdfs[id] })
                }
            }
            setMathPdfList(mathPdfList);

            for (let id in pdfs) {
                if (pdfs[id].subjectName === "Science") {
                    sciPdfList.push({ id, ...pdfs[id] })
                }
            }
            setSciPdfList(sciPdfList);
        });

    }, []);
    // const partRef = firebase.database().ref("docs").child(id);
    // console.log("1 ", id);
    // partRef.on('value', (snap) => {
    //     const parts = snap.val();
    //     const partList = [];
    //     for (let x in parts) {
    //         console.log("2 ", x);
    //         if(parts[x].subjectName==="English"){
    //             pdfList.push({ x, ...parts[x] })
    //         }

    //     }
    // })

    // if (currentUser.email === (users[id].email)) {
    //     
    // }
    return (
        <div>
            <details>
                <summary> <h1 style={{ color: "red" }}>English Books</h1> <br /></summary>
                {engPdfList ? engPdfList.map((pdf, index) => <Eng_Books_Tchr pdf={pdf} key={index} />) : ''}
            </details>
            <details>
                <summary> <h1 style={{ color: "red" }}>Maths Books</h1> <br /></summary>
                {mathPdfList ? mathPdfList.map((pdf, index) => <Math_Books_Tchr pdf={pdf} key={index} />) : ''}
            </details>
            <details>
                <summary> <h1 style={{ color: "red" }}>Science Books</h1> <br /></summary>
                {sciPdfList ? sciPdfList.map((pdf, index) => <Sci_Books_Tchr pdf={pdf} key={index} />) : ''}
            </details>



        </div>
    )
}

export default Student
