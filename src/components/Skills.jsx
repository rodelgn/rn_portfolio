import React, { useState, forwardRef } from 'react';
import './styles.css';

const Skills = forwardRef(( props, ref ) => {
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

    return (
        <div
            ref={ref}
            className={`skills-section ${isVisible ? 'fade-in' : 'fade-out'}`}
        >
            <div className='container'>
                <h1 className='title'>Skills</h1>
                <ul className='skillSet'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Leaflet</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                    <li>REST API</li>
                    <li>Git/GitHub</li>
                </ul>
            </div>
        </div>
    );
       

});

export default Skills;