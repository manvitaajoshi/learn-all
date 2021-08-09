import React, { useState, useEffect } from "react";
import firebase from "firebase";
import Eng_Books_Tchr from './Eng_Books_Tchr';
import Math_Books_Tchr from './Math_Books_Tchr';
import Sci_Books_Tchr  from './Sci_Books_Tchr';
import Header from './Header';

const View_Book = () => {
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
        <div>
            <div style={{ fontFamily: "raleway" }}>
                <Header />
                <div id="summ">
                    <details>
                        <summary> <h2 style={{ color: "black" }}>English Books</h2> <br /></summary>
                        {engPdfList ? engPdfList.map((pdf, index) => <Eng_Books_Tchr pdf={pdf} key={index} />) : ''}
                    </details>
                    <br />
                    <details>
                        <summary> <h2 style={{ color: "black" }}>Maths Books</h2> <br /></summary>
                        {mathPdfList ? mathPdfList.map((pdf, index) => <Math_Books_Tchr pdf={pdf} key={index} />) : ''}
                    </details>
                    <br />
                    <details>
                        <summary> <h2 style={{ color: "black" }}>Science Books</h2> <br /></summary>
                        {sciPdfList ? sciPdfList.map((pdf, index) => <Sci_Books_Tchr pdf={pdf} key={index} />) : ''}
                    </details>
                </div>
            </div>
        </div>
    )
}

export default View_Book
