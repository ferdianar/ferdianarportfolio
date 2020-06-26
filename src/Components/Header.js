import React from 'react';
import './Stylesheets/Header.css';
import photo from './images/profilepictures.png';
import AOS from 'aos';

const Header = () => {

    AOS.init({
        duration: 2000
    });

    return(
        <div className="header">
            <div data-aos="fade-right" className="Greeting">
                <h1>Hi, I'm Ferdian Ahmad Rozikin. Who is a Frontend Developer.</h1>
                <p className="description">I am a Frontend Web Developer at Software House located in Malang City. I have skill in Frontend Technologist and create a User Interface Design based User Experience.</p>
                <div className="action">
                {/* <button className="calltoaction" href="mailto:ferdianahmadrozikin018@gmail.com">Email Me</button>
                <button className="seeportfolio"> Portfolio</button> */}
                </div>
            </div>
            <div className="photo">
                <img className="myphoto" src={photo} alt="photo" />
                <div className="circle"></div>
            </div>
        </div>
    )
}

export default Header;