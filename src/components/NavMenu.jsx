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
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div id='header' ref={navRef}>
            <h1 className='title-bnr'>Rodel</h1>
            <nav>

                <div className="burger" onClick={toggleMenu}>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
                </div>

                <ul id='Nav' className={isMenuOpen ? 'open' : ''}>

                    <li><a href="/" className='link'>About</a></li>

                    <li>
                        <a className='link' onClick={() => handleScrollToSection(skillsRef)}>Skills</a>
                    </li>

                    <li>
                        <a className='link' onClick={() => handleScrollToSection(projectRef)}>Projects</a>
                    </li>

                    <li><a href="https://www.udemy.com/certificate/UC-e7563810-1c13-4b76-8b19-58966e53a70e/" className='link'>Certificate</a></li>

                    <li><a className='link' onClick={() => handleScrollToSection(footerRef)}>Contact</a></li>
                    
                </ul>
            </nav>
        </div>
    );

};

export default NavMenu;