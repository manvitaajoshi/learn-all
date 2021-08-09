import React, { useState, useEffect } from "react";
import firebase from "firebase";
import English_Books from './English_Books';
import Math_Books from './Maths_Books';
import Science_Books from './Science_Books';
import Header from './Header';

const View_Book_Student = () => {
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
    return (
        <div style={{fontFamily:"raleway"}}>
            <Header/>
            <div id="summ">
            <details>
                    <summary> <h2 style={{ color: "black" }}>English Books</h2> <br /></summary>
                {engPdfList ? engPdfList.map((pdf, index) => <English_Books pdf={pdf} key={index} />) : ''}
            </details>
            <br/>
            <details>
                <summary> <h2 style={{ color: "black" }}>Maths Books</h2> <br /></summary>
                {mathPdfList ? mathPdfList.map((pdf, index) => <Math_Books pdf={pdf} key={index} />) : ''}
            </details>
                <br />
            <details>
                    <summary> <h2 style={{ color: "black" }}>Science Books</h2> <br /></summary>
                {sciPdfList ? sciPdfList.map((pdf, index) => <Science_Books pdf={pdf} key={index} />) : ''}
            </details>
            </div>
        </div>
    )
}

export default View_Book_Student
