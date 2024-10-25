import "./styles/skills.css";
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
   // fetch the skills api endpoint
  const [skills, setSkills] = useState(null);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}/api/skills`)
      .then(response => response.json())
      .then(data => {
        setSkills(data[0].skills);
        console.log(data);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
      });
  }, []);
  
  
    return (
      <div id="skills">
          <h2>Skills</h2>
            {skills ? (
            <div id="skills-sections">
              <section>
                <h3>Technologies</h3>
                <ul>
                  <li>Languages: {skills.technologies.languages.join(', ')}</li>
                  <li>Databases: {skills.technologies.databases.join(', ')}</li>
                  <li>Frameworks & Libraries: {skills.technologies.frameworks_and_libraries.map((framework, index) => (
                      <span key={index}>
                        {framework}
                        {framework === "jQuery" && <><br /></>}
                        {framework !== "jQuery" && index < skills.technologies.frameworks_and_libraries.length -1 && ', '}
                      </span>
                    ))}</li>
                  <li>Other: {skills.technologies.other_technologies.join(', ')}</li>
                </ul>
                </section>
                <section>
                  <h3>Soft Skills</h3>
                  <ul>
                    {skills.soft_skills.map((soft_skill, index) => (
                      <li key={index}>{soft_skill}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3>Other:</h3>
                  <ul>
                    <li>Tools: {skills.other.tools.map((tool, index) => (
                      <span key={index}>
                        {tool}
                        {tool === "Meta for Business" && <><br /></>}
                        {tool !== "Meta for Business" && index < skills.other.tools.length -1 && ', '}
                      </span>
                    ))}
                    </li>
                    <li>{skills.other.platforms.join(', ')}</li>
                  </ul>
                </section>
            </div>
            ) : (
            <p>Loading skills...</p>
            )}
        </div>
    );
}
