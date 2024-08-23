import "./styles/projects.css"
import Header from "./Header"
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Projects() {
    const [navigate, setNavigate] = useState(false);
    const navigateTo = useNavigate();

    const handleNavigateToHome = () => {
        setNavigate(true);
        setTimeout(() => {
          navigateTo('/');
        }, 300);
    
      }

    // fetch the projects api endpoint
    const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch('https://gt-portfolio-b.vercel.app/api/projects')
      .then(response => response.json())
      .then(data => {
        setProjects(data[0].projects);
        //console.log(data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

    return(
        <div id="projects">
            <Header/>
            <Link to="/" id="back-arrow" onClick={handleNavigateToHome}></Link>
            <div id="projects-section">
                <h2>PROJECTS</h2>
                {projects ? (
                    projects.map((project, index) => (
                        <div className="project-item" key={index}>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer"><h3>{project.name}</h3></a>
                            <p>{project.description}</p>
                        </div>
                    ))
                ) : designs ? (
                    designs.map((design, index) => (
                        <div className="project-item" key={index}>
                             <a href={design.link} target="_blank" rel="noopener noreferrer"><h3>{design.name}</h3></a> 
                             <p>{design.description}</p>
                        </div>
                    ))
               ) : (
                    <p>Loading projects...</p>
                )}
            </div>
            {/* hardcoded projects for set up purposes- commented out */}
                {/*<div className="project-item">
                    <a href="https://github.com/gtouf7/sportsNweather.git"><h3>Sports N Weather</h3></a>
                    <p>A web application developed using Node.js and Pug as the engine
                    template. This application integrates four REST APIs to provide
                    data on soccer leagues in various countries and current weather
                    conditions.
                    </p>
                </div>
                <div className="project-item">
                    <a href="https://github.com/gtouf7/FutPal.git"><h3>FütPal</h3></a>
                    <p>A web application that is used by a soccer team captain to assign team members and count numbers/players missing etc. for an upcoming soccer game.
                    Technologies used: HTML, CSS and JavaScript.
                    </p>
                </div>
                <div className="project-item">
                    <a href="https://github.com/gtouf7/links-tab.git"><h3>LinksTab</h3></a>
                    <p>A mobile-focused application that is used to store personal social media profiles and other multiple links.
                    Technologies used: HTML, CSS, JavaScript including jQuery. 
                    </p>
                </div>
                <div className="project-item">
                    <a href="https://github.com/gtouf7/dramaball.git"><h3>Dramaball</h3></a>
                    <p>A Useless Web inspired website that allows the user to click on a random soccer team and watch a funny video pop-up.
                    Built with: HTML, CSS, JavaScript. 
                    </p>
                </div>
            </div>*/}
        </div>
    );
}
