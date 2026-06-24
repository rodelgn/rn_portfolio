import { useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import NavMenu from './NavMenu';
import WorkExperience from './WorkExperience';
import cards from './project-card';
import rodelImg from '/src/assets/image/rodel_img.png';
import RodelResume from '/src/assets/file/Rodel-Nercuit-Resume.pdf';
import './styles.css';
import './styles/dashboard.css';

const navItems = [
    { id: 'overview', label: 'Overview', icon: 'fa fa-user' },
    { id: 'experience', label: 'Work Log', shortLabel: 'Work', icon: 'fa fa-briefcase' },
    { id: 'projects', label: 'Project Records', shortLabel: 'Projects', icon: 'fa fa-folder-open' },
    { id: 'skills', label: 'Tech Stack', shortLabel: 'Stack', icon: 'fa fa-layer-group' },
    { id: 'contact', label: 'Contact', icon: 'fa fa-paper-plane' },
];

const skillGroups = [
    {
        title: 'Frontend',
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    },
    {
        title: 'Maps and Data',
        items: ['GIS', 'Leaflet.js', 'PostgreSQL', 'PostGIS', 'MongoDB', 'REST API'],
    },
    {
        title: 'Backend and Tools',
        items: ['Node.js', 'Express.js', 'FastAPI', 'SQLAlchemy', 'Git', 'GitHub'],
    },
    {
        title: 'Operations',
        items: ['Salesforce', 'SalesLoft', 'Asana', 'Google Analytics', 'WordPress', 'SEO'],
    },
];

const quickStats = [
    { label: 'Recent role', value: 'GIS + Frontend' },
    { label: 'Strongest fit', value: 'Web apps with maps' },
    { label: 'Core stack', value: 'React / Next.js' },
];

function PortfolioDashboard() {
    const [activeSection, setActiveSection] = useState('overview');
    const [slideDirection, setSlideDirection] = useState('forward');
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const activeItem = useMemo(
        () => navItems.find((item) => item.id === activeSection) || navItems[0],
        [activeSection]
    );

    const handleSectionChange = (nextSection) => {
        if (nextSection === activeSection) {
            return;
        }

        const currentIndex = navItems.findIndex((item) => item.id === activeSection);
        const nextIndex = navItems.findIndex((item) => item.id === nextSection);
        setSlideDirection(nextIndex > currentIndex ? 'forward' : 'back');
        setActiveSection(nextSection);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = RodelResume;
        link.download = 'Rodel-Nercuit-Resume.pdf';
        link.click();
    };

    const handleInput = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSending(true);

        const payload = new FormData(event.target);
        payload.append('access_key', '6dcdfc52-5741-4b97-80fd-bb5f6c4eb487');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(payload)),
            }).then((res) => res.json());

            if (response.success) {
                Swal.fire({
                    title: 'Message Sent!',
                    icon: 'success',
                    background: '#171A20',
                    color: '#F7F5F2',
                    confirmButtonColor: '#F5C542',
                });
                setFormData({ name: '', email: '', message: '' });
            }
        } catch {
            Swal.fire({
                title: 'Message not sent',
                text: 'Please try again in a moment.',
                icon: 'error',
                background: '#171A20',
                color: '#F7F5F2',
                confirmButtonColor: '#F5C542',
            });
        } finally {
            setIsSending(false);
        }
    };

    const renderPanel = () => {
        switch (activeSection) {
            case 'experience':
                return (
                    <PanelFrame
                        eyebrow="Work Log"
                        title="Experience"
                        description="Frontend, GIS, operations, and SEO work from recent and resume-listed roles."
                    >
                        <WorkExperience />
                    </PanelFrame>
                );
            case 'projects':
                return (
                    <PanelFrame
                        eyebrow="Project Records"
                        title="Selected Builds"
                        description="Practical builds focused on maps, productivity, and interactive browser experiences."
                    >
                        <div className="project-records">
                            {cards.map((project) => (
                                <article className="project-record" key={project.id}>
                                    <div className="project-thumb">
                                        <img src={project.image} alt={project.alt} />
                                    </div>
                                    <div className="project-info">
                                        <h3>{project.title}</h3>
                                        <p>{project.paragraph}</p>
                                        <ul className="stack-list" aria-label={`${project.title} technologies`}>
                                            {project.tags.map((tag) => (
                                                <li key={tag}>{tag}</li>
                                            ))}
                                        </ul>
                                        <div className="record-actions">
                                            <a href={project.link} target="_blank" rel="noreferrer">
                                                <i className="fa fa-link" aria-hidden="true"></i>
                                                Live
                                            </a>
                                            <a href={project.githubLink} target="_blank" rel="noreferrer">
                                                <i className="fab fa-github" aria-hidden="true"></i>
                                                Code
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </PanelFrame>
                );
            case 'skills':
                return (
                    <PanelFrame
                        eyebrow="Tech Stack"
                        title="Tools I Use"
                        description="Grouped by how I actually use them: frontend screens, map/data workflows, backend work, and operations."
                    >
                        <div className="skill-groups">
                            {skillGroups.map((group) => (
                                <section className="skill-group" key={group.title}>
                                    <h3>{group.title}</h3>
                                    <ul className="stack-list">
                                        {group.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </section>
                            ))}
                        </div>
                    </PanelFrame>
                );
            case 'contact':
                return (
                    <PanelFrame
                        eyebrow="Contact"
                        title="Start a Conversation"
                        description="Frontend work, dashboard interfaces, map-based workflows, and backend-connected web features."
                    >
                        <div className="contact-panel-grid">
                            <div className="contact-notes">
                                <h3>Good fit</h3>
                                <p>Frontend work, dashboard interfaces, map-based workflows, and backend-connected web features.</p>
                                <button type="button" className="primary-action" onClick={downloadResume}>
                                    <i className="fa fa-download" aria-hidden="true"></i>
                                    Download resume
                                </button>
                            </div>
                            <form className="dashboard-form" onSubmit={handleSubmit}>
                                <label htmlFor="name">Full Name</label>
                                <input id="name" name="name" value={formData.name} onChange={handleInput} autoComplete="name" required />
                                <label htmlFor="email">Email Address</label>
                                <input id="email" type="email" name="email" value={formData.email} onChange={handleInput} autoComplete="email" required />
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleInput} required></textarea>
                                <button type="submit" disabled={isSending}>{isSending ? 'Sending...' : 'Send Message'}</button>
                            </form>
                        </div>
                    </PanelFrame>
                );
            case 'overview':
            default:
                return (
                    <PanelFrame
                        eyebrow="Profile"
                        title="Rodel Nercuit"
                        description="Detail-oriented Web Developer with hands-on experience building GIS Tax Mapping web applications for government agencies."
                    >
                        <div className="overview-grid">
                            <div className="profile-card">
                                <img src={rodelImg} alt="Rodel Nercuit" />
                                <div>
                                    <h3>GIS / Frontend Developer</h3>
                                    <p>
                                        I build usable web application screens with React and Next.js, and I am comfortable around mapping workflows, APIs, and database-backed features.
                                    </p>
                                </div>
                            </div>

                            <div className="overview-notes">
                                <h3>Working Style</h3>
                                <p>
                                    I like building clear screens for records, maps, forms, and review workflows where the interface helps people move faster through real data.
                                </p>
                                <div className="overview-actions">
                                    <button type="button" className="primary-action" onClick={() => handleSectionChange('projects')}>
                                        <i className="fa fa-folder-open" aria-hidden="true"></i>
                                        View projects
                                    </button>
                                    <button type="button" className="secondary-action" onClick={downloadResume}>
                                        <i className="fa fa-download" aria-hidden="true"></i>
                                        Resume
                                    </button>
                                </div>
                            </div>

                            <div className="quick-stat-grid">
                                {quickStats.map((stat) => (
                                    <div className="quick-stat" key={stat.label}>
                                        <span>{stat.label}</span>
                                        <strong>{stat.value}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </PanelFrame>
                );
        }
    };

    return (
        <div className="portfolio-shell">
            <NavMenu items={navItems} activeSection={activeSection} onSectionChange={handleSectionChange} />
            <main className="workspace">
                <header className="workspace-topbar">
                    <div>
                        <span>Portfolio Workspace</span>
                        <h1>{activeItem.label}</h1>
                    </div>
                    <button type="button" className="topbar-resume" onClick={downloadResume}>
                        <i className="fa fa-file" aria-hidden="true"></i>
                        Resume
                    </button>
                </header>

                <section
                    key={activeSection}
                    className={`workspace-panel slide-${slideDirection}`}
                    aria-live="polite"
                >
                    {renderPanel()}
                </section>
            </main>
        </div>
    );
}

function PanelFrame({ eyebrow, title, description, children }) {
    return (
        <div className="panel-frame">
            <div className="panel-heading">
                <span>{eyebrow}</span>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            {children}
        </div>
    );
}

export default PortfolioDashboard;
