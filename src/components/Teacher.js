import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { v4 as uuid } from "uuid";
export default function CRUD3() {
	const [pdfUrl, setPdfUrl] = useState([]);
	const [Url, setUrl] = useState("");
	const [pdf, setPdf] = useState("");
	//browse
	const readPdfs = async (e) => {
		const file = e.target.files[0];
		const id = uuid();
		const storageRef = firebase.storage().ref("docs").child(id);
		const pdfRef = firebase.database().ref("docs").child(id);
		await storageRef.put(file);
		storageRef.getDownloadURL().then((url) => {
			pdfRef.set(url);
			const newState = [...pdfUrl, { id, url }];
			setPdfUrl(newState);
		});
	};
	// so abhi karne ka kya baki hai apna
	// studs ka ui and voh books dikhana right?
	// also while uploading this pdf the techr has to mention ki which subject then book name and who is posting it toh vaise section wise we can show to the studs ki ye eng ki hai ye maths ki hai etc
	// abhi kal dekhna hai kya? baaki ka
	// idm
	// tu voh crud chod ke koi aur vid dekhi toh bhej de meko
	// meko dummy pe ye tu jo boli try karke dekhta hu
	// ok? dummy? arey voh experiment karne ke liye like sikhte time sab try karte hai hai na, ki ye aise chal ta hai and all meko samaz nahi raha wapp pe aa

	const getPdfUrl = () => {
		const pdfRef = firebase.database().ref("docs");
		pdfRef.on("value", (snapshot) => {
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
		const storageRef = firebase.storage().ref("doc");
		const pdfRef = firebase.database().ref("docs").child(id);
		storageRef.delete().then(() => {
			pdfRef.remove();
		});
	};
	useEffect(() => {
		getPdfUrl();
	}, []);

	const upload = () => {
		const id = uuid();
		const pdfRef = firebase.database().ref("docs").child(id);

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
					// Getting Download Link
					firebase
						.storage()
						.ref("docs")
						.child(id)
						.getDownloadURL()
						.then((url) => {
							//setUrl(url);
							pdfRef.push(url);
						});
				}
			);
	};

	return (
		<div>
			<h1>Upload Study Material</h1>

			<input
				type="file"
				onChange={(e) => {
					setPdf(e.target.files[0]);
				}}
			/>
			<button onClick={upload}>Upload</button>
			<br />
			<p>
				<a href={Url}>{Url}</a>
			</p>
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
