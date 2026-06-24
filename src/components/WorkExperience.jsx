import { workExperiences } from './experience-data';

function WorkExperience() {
    return (
        <div className="experience-list-view">
            {workExperiences.map((experience) => (
                <article className="work-record" key={`${experience.role}-${experience.period}`}>
                    <div className="record-meta">
                        <span>{experience.period}</span>
                    </div>
                    <div className="record-body">
                        <p className="record-organization">{experience.organization}</p>
                        <h3>{experience.role}</h3>
                        <h3>{experience.role2}</h3>
                        <p>{experience.summary}</p>

                        <ul className="record-highlights">
                            {experience.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>

                        <ul className="stack-list" aria-label={`${experience.role} tools`}>
                            {experience.stack.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default WorkExperience;
