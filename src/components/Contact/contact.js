import React from 'react';
import "./contact.css";
import hall from "../../assets/Screenshot (303).png";
import icon from "../../assets/Screenshot (302).png";


const Contact = () => {
    return ( 	   <section className="contact">
        <div className="heading"><h1>What is Tedx?</h1></div>
        <div className="content">
            <img src= { hall } alt="hall" className="logo1" />
            <div className="from">
            <p className="textcontent">In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxNewcastle, where x = independently organized TED event. At our TEDxNewcastle event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized</p>
{/* <button className="emailus"><img src={icon} alt="" className="icon" />Email Us
</button> */}
</div>
            </div>
    </section> )
}

export default Contact;