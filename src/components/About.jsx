import './styles.css';
import './styles/about.css';
import rodel_img from '/src/assets/image/rodel_img.png';
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
        <section className="aboutBody" id="about" aria-labelledby="about-title">
            <div className="note">
                <p className="eyebrow">
                    <span className="status-dot" aria-hidden="true"></span>
                    Web application portfolio
                </p>
                <h1 id="about-title">Rodel Nercuit</h1>
                <h2>Web Developer</h2>
                <p className="intro-copy"> 
                    A passionate Web Developer who transitioned into tech to pursue my dream career. 
                    I focus on creating user-friendly and efficient web applications, 
                    combining creativity and problem-solving to deliver impactful digital solutions.
                </p>

                <div className="hero-actions">
                    <button type="button" onClick={downloadButton}>
                        Download resume <i className="fa fa-download" aria-hidden="true"></i>
                    </button>
                    <a href="#projects" className="hero-secondary-action">
                        View projects <i className="fa fa-arrow-right" aria-hidden="true"></i>
                    </a>
                </div>

                <ul className="hero-highlights" aria-label="Developer focus areas">
                    <li><strong>React</strong><span>front-end interfaces</span></li>
                    <li><strong>Node</strong><span>API foundations</span></li>
                    <li><strong>GIS</strong><span>mapping workflows</span></li>
                </ul>
            </div>

            <div className="img-container">
                <div className="portrait-frame">
                    <img className="me-img" src={rodel_img} alt="Rodel Nercuit" />
                </div>
            </div>

        </section>
    );
};

export default About;
