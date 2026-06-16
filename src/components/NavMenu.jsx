import { useState } from 'react';
import './styles/navbar.css';
import './styles.css';


function NavMenu({ skillsRef, projectRef, footerRef, navRef  }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id='header' ref={navRef}>
            <a className='title-bnr' href="#about" onClick={() => setIsMenuOpen(false)}>R</a>
            <nav aria-label="Main navigation">

                <button
                    className="burger"
                    type="button"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    aria-controls="Nav"
                >
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                </button>

                <ul id='Nav' className={isMenuOpen ? 'open' : ''}>

                    <li><a href="#about" className='link' onClick={() => setIsMenuOpen(false)}>About</a></li>

                    <li>
                        <button type="button" className='link nav-link-button' onClick={() => handleScrollToSection(skillsRef)}>Skills</button>
                    </li>

                    <li>
                        <button type="button" className='link nav-link-button' onClick={() => handleScrollToSection(projectRef)}>Projects</button>
                    </li>

                    <li><a href="https://www.udemy.com/certificate/UC-e7563810-1c13-4b76-8b19-58966e53a70e/" className='link' target="_blank" rel="noreferrer">Certificate</a></li>

                    <li><button type="button" className='link nav-link-button' onClick={() => handleScrollToSection(footerRef)}>Contact</button></li>
                    
                </ul>
            </nav>
        </div>
    );

};

export default NavMenu;
