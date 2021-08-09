import React from 'react'

const Math_Books = ({ pdf }) => {
    return (
        <div>
            <h3 style={{ color: "darkblue" }}>Title: {pdf.bookName} </h3><br />
            <h4>For standard: {pdf.standard} </h4><br />
            <p>Uploaded by: {pdf.uploadedBy} </p><br />
            <a style={{ color: "white", borderRadius: "20px", backgroundColor: "darkblue", padding: "5px 10px", textDecoration: "none" }}
                href={pdf.url} target="_blank" rel="noreferrer">DOWNLOAD</a>
            <br />
        </div>
    )
}

export default Math_Books