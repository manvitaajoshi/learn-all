import React from 'react';
import "../css/Dashboard.css"
import { Link } from 'react-router-dom';

export default function Content() {

    return (
        <>

            <section className="carousel">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    {/* <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div> */}
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img width="100%" src="school-boys.jpg" className="d-block w-100" alt="..." />
                        </div>
                        {/* <div className="carousel-item">
                            <img src="https://source.unsplash.com/800x400/?children,school" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/800x400/?foods,society" className="d-block w-100" alt="..." />
                        </div> */}
                    </div>
                    {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button> */}
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