import { useEffect, useState, forwardRef } from 'react';
import './styles.css';
import './styles/footer.css';
import Rodel_resume from '/src/assets/file/Rodel-Nercuit-Resume.pdf';
import Swal from 'sweetalert2'


const Footer = forwardRef(function Footer(props, ref) {
    const [isVisible, setIsVisible] = useState(false);
    const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    useEffect(() => {
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

    useEffect(() => {
        const handlePageScroll = () => {
            setIsBackToTopVisible(window.scrollY > 500);
        };

        handlePageScroll();
        window.addEventListener('scroll', handlePageScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handlePageScroll);
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const downloadButton = () => {
        const link = document.createElement('a');
        link.href = Rodel_resume;
        link.download = "Rodel-Nercuit-Resume.pdf";
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
        setIsSending(true);
        const payload = new FormData(event.target);
    
        payload.append("access_key", "6dcdfc52-5741-4b97-80fd-bb5f6c4eb487");
    
        const object = Object.fromEntries(payload);
        const json = JSON.stringify(object);
    
        try {
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
                    draggable: true,
                    background: "#171A20",
                    color: "#F7F5F2",
                    confirmButtonColor: "#F5C542"
                });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch {
            Swal.fire({
                title: "Message not sent",
                text: "Please try again in a moment.",
                icon: "error",
                background: "#171A20",
                color: "#F7F5F2",
                confirmButtonColor: "#F5C542"
            });
        } finally {
            setIsSending(false);
        }
      };

    return (
        <>
        <section ref={ref} className={`footerContainer ${isVisible ? 'fade-in' : 'fade-out'}`} aria-labelledby="contact-title">
            <h1 className='title' id="contact-title">Get in Touch</h1>

            <div className='contact-layout'>
                <div className="contact-copy">
                    <p className="eyebrow">Let&apos;s build something useful</p>
                    <h2>Have a project or role in mind?</h2>
                    <p>
                        Send a message with the details and I&apos;ll get back to you. I&apos;m especially interested in practical web apps, responsive interfaces, and mapping workflows.
                    </p>

                <ul className="mediaContainer">
                    <li><a className='link' href="https://github.com/rodelgn" target="_blank" rel="noreferrer"><i className="fab fa-github" aria-hidden="true"></i>GitHub</a></li>
                    <li><a className='link' href="https://www.linkedin.com/in/rodel-jr-nercuit-7395b5195/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i>LinkedIn</a></li>
                    <li><a className='link' href='https://www.udemy.com/certificate/UC-e7563810-1c13-4b76-8b19-58966e53a70e/' target="_blank" rel="noreferrer"><i className="fa fa-solid fa-certificate" aria-hidden="true"></i>Certificate</a></li>
                    <li><button className='link footer-link-button' type="button" onClick={downloadButton}><i className="fa fa-sharp fa-solid fa-file" aria-hidden="true"></i>Resume</button></li>
                </ul>
                </div>

                <div className='form-cntnr'>
                    <form className='input-cntnr' action="" method="post" onSubmit={onSubmit}>
                        <label htmlFor="name">Full Name</label>
                        <input id="name" type="text" value={formData.name} onChange={handleInput} placeholder='Your Name' name='name' autoComplete="name" required />
                        <label htmlFor="email">Email Address</label>
                        <input id="email" type="email" value={formData.email} onChange={handleInput} placeholder='Your Email' name='email' autoComplete="email" required/>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter Message" value={formData.message} onChange={handleInput} rows="4" cols="50" name='message' required></textarea>
                        <button type='submit' disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'}</button>
                    </form>
                </div>
            </div>
            <p className="rodel-ftr">Rodel Nercuit &copy; {(new Date().getFullYear())}</p>
        </section>
        <div className={`to-top ${isBackToTopVisible ? 'visible' : ''}`}>
            <button className='to-top-btn' type="button" onClick={handleScrollToTop} aria-label="Scroll to top">
                <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                <span className="tooltip-text">Scroll Top</span>
            </button>
        </div>
        </>
    );
});

export default Footer;
