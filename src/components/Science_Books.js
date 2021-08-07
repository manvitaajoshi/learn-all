import React from 'react'

const Science_Books = ({ pdf }) => {
    return (
        <div>
            <h2>{pdf.bookName} </h2>
            <h3>{pdf.standard} </h3>
            <h3>{pdf.uploadedBy} </h3>
            <a href={pdf.url} target="_blank">Download</a>
            <br /><hr /><br />
        </div>
    )
}

export default Science_Books