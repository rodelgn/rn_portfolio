import React from "react";
import './styles.css';

function About() {

    const downloadButton = () => {
        const link = document.createElement('a');
        link.href = "/file/Rodel_Nercuit-CV.pdf";
        link.download = "Rodel_Nercuit-CV.pdf";
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
                    <img className="me-img" src="/img/rodel_img.png" alt="rodel-picture" />
                </div>
            </div>

        </div>
    );
};

export default About;