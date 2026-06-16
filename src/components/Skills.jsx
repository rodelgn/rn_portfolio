import { useEffect, useState, forwardRef } from 'react';
import './styles.css';
import './styles/skills.css';

const skills = [
    { name: 'HTML', icon: 'fab fa-brands fa-html5', color: '#EB5A3C' },
    { name: 'CSS', icon: 'fab fa-brands fa-css3-alt', color: '#2F80ED' },
    { name: 'JavaScript', icon: 'fab fa-brands fa-js', color: '#F7DF1E' },
    { name: 'React', icon: 'fab fa-brands fa-react', color: '#61DAFB' },
    { name: 'Bootstrap', icon: 'fab fa-brands fa-bootstrap', color: '#B771E5' },
    { name: 'Node.js', icon: 'fab fa-brands fa-node-js', color: '#77B254' },
    { name: 'Express.js', icon: 'fa fa-solid fa-route', color: '#F7F5F2' },
    { name: 'EJS', icon: 'fa fa-regular fa-file-code', color: '#F7F5F2' },
    { name: 'Leaflet', icon: 'fab fa-brands fa-envira', color: '#77B254' },
    { name: 'PostgreSQL', icon: 'fa fa-sharp fa-solid fa-database', color: '#5AA9E6' },
    { name: 'MongoDB', icon: 'fa fa-sharp fa-solid fa-database', color: '#5D8736' },
    { name: 'REST API', icon: 'fa fa-solid fa-server', color: '#44D7B6' },
    { name: 'GitHub', icon: 'fab fa-github', color: '#F7F5F2' },
    { name: 'Git', icon: 'fab fa-brands fa-git-alt', color: '#F34F29' },
];

const Skills = forwardRef(function Skills(props, ref) {
    const [isVisible, setIsVisible] = useState(false);
    
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

    return (
        <div
            ref={ref}
            className={`skills-section ${isVisible ? 'fade-in' : 'fade-out'}`}
        >
            <div className='container'>
                <h1 className='title'>Skills</h1>
                <p className="section-lede">
                    Tools I use to build responsive interfaces, backend foundations, and map-driven web experiences.
                </p>
                <ul className='skillSet'>
                    {skills.map((skill) => (
                        <li key={skill.name} style={{ '--skill-color': skill.color }}>
                            <i className={skill.icon} aria-hidden="true"></i>
                            <span>{skill.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
       

});

export default Skills;
