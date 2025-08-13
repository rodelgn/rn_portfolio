import React, { useState, forwardRef } from 'react';
import './styles.css';
import './styles/skills.css';

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
                    <li><i className="fab fa-brands fa-html5" style={{ fontSize: '36px', color: '#EB5A3C', marginRight: '6px' }}></i>HTML</li>
                    <li><i className="fab fa-brands fa-css3-alt" style={{ fontSize: '36px', color: '#0A5EB0', marginRight: '6px' }}></i>CSS</li>
                    <li><i className="fab fa-brands fa-js" style={{ fontSize: '36px', color: '#FFEB00', marginRight: '6px' }}></i>JavaScript</li>
                    <li><i className="fab fa-brands fa-react" style={{ fontSize: '36px', color: '#537EA4', marginRight: '6px' }}></i>React</li>
                    <li><i className="fab fa-brands fa-bootstrap" style={{ fontSize: '36px', color: '#B771E5', marginRight: '6px' }}></i>Bootstrap</li>
                    <li><i className="fab fa-brands fa-node-js" style={{ fontSize: '36px', color: '#77B254', marginRight: '6px' }}></i>Node.js</li>
                    <li><i className="fa fa-regular fa-image" style={{ fontSize: '36px', color: '#EFF3EA', marginRight: '6px' }}></i>Express.js</li>
                    <li><i className="fa fa-regular fa-image" style={{ fontSize: '36px', color: '#EFF3EA', marginRight: '6px' }}></i>EJS</li>
                    <li><i className="fab fa-brands fa-envira" style={{ fontSize: '34px', color: '#77B254', marginRight: '6px' }}></i>Leaflet</li>
                    <li><i className="fa fa-sharp fa-solid fa-database" style={{ fontSize: '32px', color: '#537EA4', marginRight: '6px' }}></i>PostgreSQL</li>
                    <li><i className="fa fa-sharp fa-solid fa-database" style={{ fontSize: '32px', color: '#5D8736', marginRight: '6px' }}></i>MongoDB</li>
                    <li><i className="fa fa-solid fa-server" style={{ fontSize: '32px', color: '#5D8736', marginRight: '6px' }}></i>REST API</li>
                    <li><i className="fab fa-github" style={{ color: 'white', fontSize: '32px', marginRight: '6px' }}></i>Github</li>
                    <li><i className="fab fa-brands fa-git-alt" style={{ fontSize: '32px', color: '#f34f29', marginRight: '6px' }}></i>Git</li>
                </ul>
            </div>
        </div>
    );
       

});

export default Skills;