import React from "react";
import './styles.css';
import rodel_img from '/src/assets/image/rodel_img.png';
// import Rodel_CV from '/src/assets/file/Rodel-Nercuit-CV.pdf';
import Rodel_resume from '/src/assets/file/Rodel-Nercuit-Resume.pdf';

function About() {

    const downloadButton = () => {
        const link = document.createElement('a');
        link.href = Rodel_resume;
        link.download = "Rodel-Nercuit-Resume.pdf";
        link.click();
        // console.log("Download CV");
    };

    return (
        <div className="aboutBody">
            <div className="note">
                <h3>Hello! I'm</h3>
                <h1>Rodel Nercuit</h1>
                <h2>Web Developer</h2>
                <p> 
                A passionate Web Developer who transitioned into tech to pursue my dream career. 
                I focus on creating user-friendly and efficient web applications, 
                combining creativity and problem-solving to deliver impactful digital solutions.
                </p>

                <button onClick={downloadButton}>Download CV <i className="fa fa-download"></i></button>
            </div>

            <div className="img-container">
                <div className="border-rotating">
                    <img className="me-img" src={rodel_img} alt="rodel-picture" />
                </div>
            </div>

        </div>
    );
};

export default About;