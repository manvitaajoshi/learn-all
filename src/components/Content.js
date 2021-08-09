import React from 'react';
import "../css/Dashboard.css"

export default function Content() {

    return (
        <>
            <section className="carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img width="100%" src="school-boys.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </section>
            <h1 className="text-box heading-primary">

                <span className="heading-primary-main">Learn All Foundation</span>
                <br />
                <span className="heading-primary-sub">Learing for everyone, learning to empower.</span>
            </h1>

        </>
    )
}