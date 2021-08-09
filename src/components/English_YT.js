import React from 'react'

const English_YT = ({ link }) => {
    return (
        <div>
            <h3 style={{ color: "darkblue" }}>Title: {link.title} </h3><br />
            <h4>For standard: {link.standard} </h4><br />
            <p>Uploaded by: {link.uploadedBy} </p><br />
            <iframe src={link.link}
                frameBorder='0'
                allow='autoplay; encrypted-media; fullscreen'
                allowFullScreen
                title='video'
            />
            <br />
        </div>
    )
}

export default English_YT