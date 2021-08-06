import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { v4 as uuid } from 'uuid';
export default function CRUD3() {
    const [pdfUrl, setPdfUrl] = useState([]);

    const readPdfs = async (e) => {
        const file = e.target.files[0];
        const id = uuid();
        const storageRef = firebase.storage().ref('docs').child(id);
        const pdfRef = firebase.database().ref('docs').child(id);
        await storageRef.put(file);
        storageRef.getDownloadURL().then((url) => {
            pdfRef.set(url);
            const newState = [...pdfUrl, { id, url }];
            setPdfUrl(newState);
        });
    };

    const getPdfUrl = () => {
        const pdfRef = firebase.database().ref('docs');
        pdfRef.on('value', (snapshot) => {
            const pdfUrls = snapshot.val();
            const urls = [];
            for (let id in pdfUrls) {
                urls.push({ id, url: pdfUrls[id] });
            }
            const newState = [...pdfUrl, ...urls];
            setPdfUrl(newState);
        });
    };
    const deletePdf = (id) => {
        const storageRef = firebase.storage().ref('doc');
        const pdfRef = firebase.database().ref('docs').child(id);
        storageRef.delete().then(() => {
            pdfRef.remove();
        });
    };
    useEffect(() => {
        getPdfUrl();
    }, []);

    return (
        <div>
            <h1>Upload Study Material</h1>
            <input type="file" accept=".pdf" onChange={readPdfs} />
            {pdfUrl
                ? pdfUrl.map(({ id, url }) => {
                    return (
                        <div key={id}>
                            {/* <h1>{url}</h1> */}
                            <a href={url} target="_blank">Click</a>
                            <button onClick={() => deletePdf(id)}>Delete</button>
                        </div>
                    );
                })
                : ''}
        </div>
    );
}