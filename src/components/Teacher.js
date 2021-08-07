import React from "react";
import { Link } from "react-router-dom"

export default function Teacher() {
    // const [pdfUrl, setPdfUrl] = useState([]);
    // const [url, setUrl] = useState("");
    // const [pdf, setPdf] = useState("");
    // const [bookName, setbookName] = useState("");
    // const [uploadedBy, setuploadedBy] = useState("");
    // const [subjectName, setsubjectName] = useState("");
    // const [standard, setStandard] = useState("");
    // //browse
    // const readPdfs = async (e) => {
    //     const file = e.target.files[0];
    //     const id = uuid();
    //     const storageRef = firebase.storage().ref("docs").child(id);
    //     const pdfRef = firebase.database().ref("docs").child(id);
    //     await storageRef.put(file);
    //     storageRef.getDownloadURL().then((url) => {
    //         pdfRef.set(url);
    //         const newState = [...pdfUrl, { id, url }];
    //         setPdfUrl(newState);
    //     });
    // };


    // const getPdfUrl = () => {
    //     const pdfRef = firebase.database().ref("docs");
    //     pdfRef.on("value", (snapshot) => {
    //         const pdfUrls = snapshot.val();
    //         const urls = [];
    //         for (let id in pdfUrls) {
    //             urls.push({ id, url: pdfUrls[id] });
    //         }
    //         const newState = [...pdfUrl, ...urls];
    //         setPdfUrl(newState);
    //     });
    // };
    // const deletePdf = (id) => {
    //     const storageRef = firebase.storage().ref("doc");
    //     const pdfRef = firebase.database().ref("docs").child(id);
    //     storageRef.delete().then(() => {
    //         pdfRef.remove();
    //     });
    // };
    // useEffect(() => {
    //     getPdfUrl();
    // }, []);

    // const upload = () => {
    //     const id = uuid();
    //     const pdfRef = firebase.database().ref("docs");

    //     //pdfRef.push(pdfInfo);
    //     if (pdf == null) return;
    //     firebase
    //         .storage()
    //         .ref("docs")
    //         .child(id)
    //         .put(pdf)
    //         .on(
    //             "state_changed",
    //             alert("Material uploaded successfully!"),
    //             alert,
    //             () => {
    //                 // Getting Download Link
    //                 firebase
    //                     .storage()
    //                     .ref("docs")
    //                     .child(id)
    //                     .getDownloadURL()
    //                     .then((url) => {
    //                         setUrl(url);
    //                         //pdfRef.push(url, pdfInfo);
    //                         const pdfInfo = {
    //                             bookName,
    //                             uploadedBy,
    //                             subjectName,
    //                             standard,
    //                             url

    //                         };
    //                         pdfRef.push(pdfInfo);
    //                     });

    //             }
    //         );
    // };

    return (
        <div>
            <Link to="/upload-books" style={{ color: "black" }}>Upload Books</Link> <br/><br/>
            <Link to="/view-books" style={{ color: "black" }}>View Books</Link>

            {/* <input
                type="file"
                onChange={(e) => {
                    setPdf(e.target.files[0]);
                }}
            /> <br /><br />
            <input type="text" onChange={(e) => { setsubjectName(e.target.value) }} placeholder="Subject" required /><br /><br />
            <input type="text" onChange={(e) => { setStandard(e.target.value) }} placeholder="For standard" required /><br /><br />
            <input type="text" onChange={(e) => { setbookName(e.target.value) }} placeholder="Book Name" required /><br /><br />
            <input type="text" onChange={(e) => { setuploadedBy(e.target.value) }} placeholder="Uploaded By" required /><br /><br />
            <button onClick={upload}>Upload</button>
            <br /> */}
            {/* <p>
                <a href={url}>{url}</a>
            </p> */}
            {/* {pdfUrl
				? pdfUrl.map(({ id, url }) => {
						return (
							<div key={id}>
						
								<a href={url} target="_blank">
									Click
								</a>
								<button onClick={() => deletePdf(id)}>Delete</button>
							</div>
						);
				  })
				: ""} */}
        </div>
    );
}


// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase';
// import { v4 as uuid } from 'uuid';
// export default function CRUD3() {
//     const [pdfUrl, setPdfUrl] = useState([]);

//     const readPdfs = async (e) => {
//         const file = e.target.files[0];
//         const id = uuid();
//         const storageRef = firebase.storage().ref('docs').child(id);
//         const pdfRef = firebase.database().ref('docs').child(id);
//         await storageRef.put(file);
//         storageRef.getDownloadURL().then((url) => {
//             pdfRef.set(url);
//             const newState = [...pdfUrl, { id, url }];
//             setPdfUrl(newState);
//         });
//     };

//     const getPdfUrl = () => {
//         const pdfRef = firebase.database().ref('docs');
//         pdfRef.on('value', (snapshot) => {
//             const pdfUrls = snapshot.val();
//             const urls = [];
//             for (let id in pdfUrls) {
//                 urls.push({ id, url: pdfUrls[id] });
//             }
//             const newState = [...pdfUrl, ...urls];
//             setPdfUrl(newState);
//         });
//     };
//     const deletePdf = (id) => {
//         const storageRef = firebase.storage().ref('doc');
//         const pdfRef = firebase.database().ref('docs').child(id);
//         storageRef.delete().then(() => {
//             pdfRef.remove();
//         });
//     };
//     useEffect(() => {
//         getPdfUrl();
//     }, []);

//     return (
//         <div>
//             <h1>Upload Study Material</h1>
//             <input type="file" accept=".pdf" onChange={readPdfs} />
//             {pdfUrl
//                 ? pdfUrl.map(({ id, url }) => {
//                     return (
//                         <div key={id}>
//                             {/* <h1>{url}</h1> */}
//                             <a href={url} target="_blank">Click</a>
//                             <button onClick={() => deletePdf(id)}>Delete</button>
//                         </div>
//                     );
//                 })
//                 : ''}
//         </div>
//     );
// }