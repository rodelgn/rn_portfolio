import { useState, forwardRef, useEffect } from 'react';
import './styles.css';
import './styles/projects.css';

const Projects = forwardRef(function Projects({ projects }, ref) {
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
        <section ref={ref} id="projects" className={`project-section ${isVisible ? 'fade-in' : 'fade-out'}`} aria-labelledby="projects-title">
            <div className='project-ctn'>
                <h1 className='title' id="projects-title">Projects</h1>
                <p className="section-lede">
                    A few practical builds focused on maps, productivity, and interactive browser experiences.
                </p>

                <div className={`card1 ${isTransitioning ? (isNext ? 'fade-out-right' : 'fade-out-left') : 'fade-in'}`}>
                    <div className="project-media">
                        <img src={currentProject.image} alt={currentProject.alt} />
                    </div>
                    <div className='card-content'>
                        <span className="project-count">
                            {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                        </span>
                        <h2>{currentProject.title}</h2>
                        <ul className="project-tags" aria-label={`${currentProject.title} technologies`}>
                            {currentProject.tags.map((tag) => (
                                <li key={tag}>{tag}</li>
                            ))}
                        </ul>
                        <p>{currentProject.paragraph}</p>

                        <div className='btn-proj'>
                            <a className='lrn-more' href={currentProject.link} target="_blank" rel="noreferrer">
                                <i className="fa fa-link" aria-hidden="true"></i>
                                Live
                            </a>
                            <a className='lrn-more secondary' href={currentProject.githubLink} target="_blank" rel="noreferrer">
                                <i className="fab fa-github" aria-hidden="true"></i>
                                Code
                            </a>
                        </div>
                    </div>
                </div>

                <div className='navigation-btn'>
                    <button className='nav-btn' type="button" onClick={handlePrevious} aria-label="Previous project">
                        <i className='fas fa-angle-left' aria-hidden="true"></i>
                    </button>
                    <button className='nav-btn' type="button" onClick={handleNext} aria-label="Next project">
                        <i className='fas fa-angle-right' aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </section>
    );
});

export default Projects;
