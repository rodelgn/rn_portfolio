import React, { useState, forwardRef, useEffect } from 'react';
import './styles.css';

const Projects = forwardRef (( { projects  }, ref ) => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [isNext, setIsNext] = useState(true);
    
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

    const handleNext = () => {
        setIsNext(true);
        setIsTransitioning(true);
         setTimeout(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
         setIsTransitioning(false);
    }, 300);

    };

    const handlePrevious = () => {
        setIsNext(false);
        setIsTransitioning(true);
         setTimeout(() => {
         setCurrentIndex((prevIndex) =>
             prevIndex === 0 ? projects.length - 1 : prevIndex - 1
         );
         setIsTransitioning(false);
    }, 300);
    };

    const currentProject = projects[currentIndex];

    return (
        <div ref={ref} className={`project-section ${isVisible ? 'fade-in' : 'fade-out'}`}>
            <div className='project-ctn'>
                <h1 className='title'>Projects</h1>

                <div className={`card1 ${isTransitioning ? (isNext ? 'fade-out-right' : 'fade-out-left') : 'fade-in'}`}>
                    <img src={currentProject.image} alt={currentProject.alt} />
                    <div className='card-content'>
                    <h1>{currentProject.title}</h1>
                    <p>{currentProject.paragraph}</p>

                    <div className='btn-proj'>
                    <a className='lrn-more' href={currentProject.link} style={{ borderRadius: '100px' }}><i className="fa fa-link" style={{ fontSize: '21px' }}></i></a>
                    <a className='lrn-more' href={currentProject.githubLink} style={{ borderRadius: '100px' }}><i className="fab fa-github" style={{ fontSize: '26px' }}></i></a>
                    </div>
                    </div>
                </div>

                <div className='navigation-btn'>
                <button className='nav-btn' onClick={handlePrevious}><i className='fas fa-angle-left'></i></button>
                <button className='nav-btn' onClick={handleNext}><i className='fas fa-angle-right'></i></button>
                </div>
            </div>
        </div>
    );
});

export default Projects;