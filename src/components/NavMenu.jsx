import './styles/navbar.css';

function NavMenu({ items, activeSection, onSectionChange }) {
    return (
        <aside className="app-sidebar" aria-label="Portfolio navigation">
            <div className="sidebar-profile">
                <a className="title-bnr" href="#overview" onClick={(event) => {
                    event.preventDefault();
                    onSectionChange('overview');
                }}>
                    R
                </a>
                <div>
                    <p className="sidebar-name">Rodel Nercuit</p>
                    <p className="sidebar-role">GIS / Frontend Developer</p>
                </div>
            </div>

            <nav className="sidebar-nav">
                {items.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => onSectionChange(item.id)}
                        aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                        <i className={item.icon} aria-hidden="true"></i>
                        <span className="sidebar-link-label">{item.label}</span>
                        <span className="sidebar-link-short">{item.shortLabel || item.label}</span>
                    </button>
                ))}
            </nav>

            <div className="sidebar-footer">
                <a href="https://github.com/rodelgn" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <i className="fab fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.linkedin.com/in/rodel-jr-nercuit-7395b5195/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="https://www.udemy.com/certificate/UC-e7563810-1c13-4b76-8b19-58966e53a70e/" target="_blank" rel="noreferrer" aria-label="Certificate">
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                </a>
            </div>
        </aside>
    );
}

export default NavMenu;
