import React from "react";
import './styles.css';

function About() {

    const downloadButton = () => {
        const link = document.createElement('a');
        link.href = "src/assets/file/Rodel_Nercuit-CV.pdf";
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
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Quo sed laboriosam, ullam temporibus fugiat sequi at, nam, doloremque eveniet vel voluptas nisi. 
                Labore odit est officiis quasi tempora eaque obcaecati!
                </p>

                <button onClick={downloadButton}>Download CV <i className="fa fa-download"></i></button>
            </div>

            <div className="img-container">
                <div className="border-rotating">
                    <img className="me-img" src="../src/assets/img/rodel_img.png" alt="rodel-picture" />
                </div>
            </div>

        </div>
    );
};

export default About;