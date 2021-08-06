import React, { useState } from 'react';
import '../css/Dashboard.css';

export default function Chatbot() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button className="btn btn-danger" style={{
                position: "fixed",
                top: "90%",
                left: "87%",
                width: "35px",
                height: "40px",
                color: "white",
                borderRadius: "8px",
                border: "white"
            }} onClick={() => {
                setShow(!show)
            }}>
                {/* <span>
                    <i classname="fas fa-question"></i></span> */}
                <span className="fa fa-question fa-2x"></span>
            </button>

            {
                show === true ?
                    <iframe className="chatbot" width="310" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/78e40d1f-42b7-478c-8760-8db48489301c"></iframe>
                    : ""
                    // <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/1b21d25a-de3c-4aeb-bfcf-4e87ad438070"></iframe>: ""
            }
        </>


    );
}