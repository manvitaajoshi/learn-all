import React from "react";
import "../css/Dashboard.css"

export default function Footer() {
    return (<footer>
        <br /><br />

        LearnAll Foundation<br />
        {/* <div className="copyright"> */}
        &copy; Copyright XYZ<br />
        All rights reserved.<br /><br />
        {/* </div> */}
        Follow us on &nbsp;&nbsp;&nbsp;
        <ul className="icons">

            <a><i className="fa fa-linkedin"></i> </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a><i className="fa fa-instagram"></i></a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a><i className="fa fa-facebook"></i></a>
        </ul>

    </footer>)
}