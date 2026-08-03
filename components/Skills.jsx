import "./styles/skills.css";
import skills from "../src/data/skills.js";

const sections = [
  { key: "marketing", title: "Marketing" },
  { key: "languages_and_tools", title: "Languages & Tools" },
  { key: "software_and_systems", title: "Software & Systems" },
  { key: "certifications", title: "Certifications" },
];

export default function Skills() {
  return (
    <div id="skills">
      <h2>Skills</h2>
      <div id="skills-sections">
        {sections.map(({ key, title }) => (
          <section key={key}>
            <h3>{title}</h3>
            <ul>
              {skills[key].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
