import React, { useState } from 'react';
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

                    <li><a href="#" className='link'>Home</a></li>

                    <li>
                        <a href="#" className='link' onClick={() => handleScrollToSection(skillsRef)}>Skills</a>
                    </li>

                    <li>
                        <a href="#" className='link' onClick={() => handleScrollToSection(projectRef)}>Portfolio</a>
                    </li>

                    <li><a href="#" className='link' onClick={() => handleScrollToSection(footerRef)}>Contact</a></li>
                    <li><a href="#" className='link'>Resume</a></li>
                </ul>
            </nav>
        </div>
    );

};

export default NavMenu;