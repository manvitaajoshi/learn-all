import React from 'react'

const Announcement_Display_Student = ({ ann }) => {
<>

</>

    return (
        <div>
            <h4>Subject: {ann.subjectName} </h4>
            <h5>For standard: {ann.standard} </h5>
            <p>{ann.announcement} </p>
            <p>-{ann.uploadedBy}</p>
            <br /><hr /><br />
        </div>
    )
}

export default Announcement_Display_Student
