import "./styles/skills.css";

export default function Skills() {
    return(
        <div id="skills">
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
        </div>
    );
}