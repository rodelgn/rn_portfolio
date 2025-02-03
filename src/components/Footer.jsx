import React, { useState, forwardRef } from 'react';
import './styles.css';
import Rodel_CV from '/src/assets/file/Rodel_Nercuit-CV.pdf';
import Swal from 'sweetalert2'


const Footer = forwardRef (( props, ref ) => {
    const { navRef } = props;
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

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
        link.href = Rodel_CV;
        link.download = "Rodel_Nercuit-CV.pdf";
        link.click();
        // console.log("Download CV");
    };

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //Contact Form
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6dcdfc52-5741-4b97-80fd-bb5f6c4eb487");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Message Sent!",
                icon: "success",
                draggable: true
              });
            setFormData({ name: '', email: '', message: '' });
        }
      };

    return (
        <div ref={ref} className={`footerContainer ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <h1>Get in Touch</h1>

            <div className='form-cntnr'>
                <form className='input-cntnr' action="" method="post" onSubmit={onSubmit}>
                    <label>Full Name:</label>
                    <input type="text" value={formData.name} onChange={handleInput} placeholder='Your Name' name='name' required />
                    <label>Email Address:</label>
                    <input type="email" value={formData.email} onChange={handleInput} placeholder='Your Email' name='email' required/>
                    {/* <label>Company</label>
                    <input type="text" placeholder='Company'/> */}
                    <label>Message:</label>
                    <textarea placeholder="Enter Message" value={formData.message} onChange={handleInput} rows="4" cols="50" defaultValue="" name='message' required></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </div>

            <div>
                <ul className="mediaContainer">
                    {/* <li className='link'><i className="fa fa-envelope" style={{ marginRight: '3px' }}></i> rodelg.nercuit@gmail.com</li> */}
                    <li><a className='link' href="https://github.com/rodelgn"><i className="fab fa-github" style={{ color: 'white', fontSize: '26px', marginRight: '6px' }}></i>GitHub</a></li>
                    <li><a className='link' href="https://www.linkedin.com/in/rodel-jr-nercuit-7395b5195/"><i className="fab fa-linkedin" aria-hidden="true" style={{ fontSize: '26px', color: 'white', marginRight: '6px' }}></i>LinkedIn</a></li>
                    <li><a className='link' style={{ cursor: 'pointer' }} onClick={downloadButton}><i className="fa fa-sharp fa-solid fa-file" style={{ color: 'white', fontSize: '26px', marginRight: '6px' }}></i>Resume</a></li>
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