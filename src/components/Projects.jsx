import React, { useState, forwardRef } from 'react';
import './styles.css';

const Projects = forwardRef (( { projects  }, ref ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    
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

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const currentProject = projects[currentIndex];

    return (
        <div ref={ref} className={`project-section ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className='project-ctn'>
                <h1 className='title'>Projects</h1>

                <div className='card1'>
                    <img src={currentProject.image} alt={currentProject.alt} />
                    <div className='card-content'>
                    <h1>{currentProject.title}</h1>
                    <p>{currentProject.paragraph}</p>

                    <div className='btn-proj'>
                    <button className='lrn-more' style={{ borderRadius: '100px' }}><i className="fa fa-link" style={{ fontSize: '21px' }}></i></button>
                    <button className='lrn-more' style={{ borderRadius: '100px' }}><i className="fab fa-github" style={{ color: 'black', fontSize: '26px' }}></i></button>
                    </div>
                    </div>
                </div>

                <button className='nav-btn' onClick={handlePrevious}><i className='fas fa-angle-left'></i></button>
                <button className='nav-btn' onClick={handleNext}><i className='fas fa-angle-right'></i></button>
            </div>
        </div>
    );
});

export default Projects;