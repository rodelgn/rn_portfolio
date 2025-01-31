import React, { useState, forwardRef } from 'react';
import './styles.css';


const Footer = forwardRef (( props, ref ) => {
    const { navRef } = props;
    const [isVisible, setIsVisible] = useState(false);

    React.useEffect(() => {
        if (ref && ref.current) {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                },
                { threshold: 0.5 }
            );
            observer.observe(ref.current);
            return () => observer.disconnect();
        }
    }, [ref]);

    const handleScrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
    };

    const downloadButton = () => {
        const link = document.createElement('a');
        link.href = "/src/assets/file/Rodel_Nercuit-CV.pdf";
        link.download = "Rodel_Nercuit-CV.pdf";
        link.click();
        // console.log("Download CV");
    };

    return (
        <div ref={ref} className={`footerContainer ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <h1>Get in Touch</h1>

            <div className='form-cntnr'>
                <form className='input-cntnr' action="" method="post" >
                    <label>Full Name</label>
                    <input type="text" placeholder='Name' required/>
                    <label>Email Address</label>
                    <input type="text" placeholder='Email' required/>
                    {/* <label>Company</label>
                    <input type="text" placeholder='Company'/> */}
                    <label>Message:</label>
                    <textarea placeholder="Enter Message" rows="4" cols="50" defaultValue="" required></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>

            <div>
                <ul className="mediaContainer">
                    {/* <li className='link'><i className="fa fa-envelope" style={{ marginRight: '3px' }}></i> rodelg.nercuit@gmail.com</li> */}
                    <li><a className='link' href="https://github.com/rodelgn"><i className="fab fa-github" style={{ color: 'red', fontSize: '26px', marginRight: '6px' }}></i>GitHub</a></li>
                    <li><a className='link' href="https://www.linkedin.com/in/rodel-jr-nercuit-7395b5195/"><i className="fab fa-linkedin" aria-hidden="true" style={{ fontSize: '26px', color: 'red', marginRight: '6px' }}></i>LinkedIn</a></li>
                    <li><a className='link' style={{ cursor: 'pointer' }} onClick={downloadButton}>Resume</a></li>
                </ul>
            </div>
            <div className='to-top'>
            <button className='to-top-btn' onClick={() => handleScrollToSection(navRef)}>
                <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                <span className="tooltip-text">Scroll Top</span>
            </button>
            </div>
            <p className="rodel-ftr">Rodel Nercuit &copy; {(new Date().getFullYear())}</p>
        </div>
    );
});

export default Footer;