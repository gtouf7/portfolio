import "./styles/skills.css";
import { useState, useEffect } from 'react';

export default function Skills() {
   // fetch the skills api endpoint
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch('https://gt-portfolio-b.vercel.app/api/skills')
      .then(response => response.json())
      .then(data => {
        setSkills(data[0].skills);
        //console.log(data);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
      });
  }, []);
  
    return(
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
            <p style={{align-text: center}}>Loading skills...</p>
            )}
        </div>
        /* hardcoded skills for setup purposes - commented out */
        /*<div id="skills">
            <h2>Skills</h2>
            <div id="skills-sections">
                <section>
                    <h3>Technologies</h3>
                    <ul>
                        <li className="skill-item">Languages: HTML, CSS, JavaScript, C, C#,<br /> PHP, TypeScript</li>
                        <li className="skill-item">Databases: MySQL, MongoDB</li>
                        <li className="skill-item">Frameworks and Libraries: ASP.NET, Node.js,<br />Express.js, React.js, jQuery, Next.js</li>
                        <li className="skill-item">Tailwind, Bootstrap</li>
                        <li className="skill-item">REST APIs, XML, JSON</li>
                    </ul>
                </section>
                <section>
                    <h3>Soft Skills</h3>
                    <ul>
                        <li className="skill-item">Multitasking</li>
                        <li className="skill-item">Problem Solving</li>
                        <li className="skill-item">Strong Communication & Teamwork</li>
                        <li className="skill-item">Critical Thinking</li>
                        <li className="skill-item">Rapid Learning</li>
                        <li className="skill-item">Attention to Detail</li>
                    </ul>
                </section>
                <section>
                    <h3>Other</h3>
                    <ul>
                        <li className="skill-item">WordPress, SEO</li>
                        <li className="skill-item">Visual Studio 2022, VS Code</li>
                        <li className="skill-item">Meta for Business</li>
                        <li className="skill-item">Microsoft Office Suite</li>
                        <li className="skill-item">Figma, Canva</li>
                        <li className="skill-item">Notion, Monday, Asana</li>
                        <li className="skill-item">Knowledge of Shopify & Amazon Seller Central</li>
                    </ul>
                </section>
            </div>
        </div> */
        
    );
}
