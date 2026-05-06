import "./styles/projects.css"
import Header from "./Header"
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { RotatingLines } from "react-loader-spinner";

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
    const [designs, setDesigns] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_APP_URL}/api/projects`)
      .then(response => response.json())
      .then(data => {
        setProjects(data[0].projects);
        setDesigns(data[0].designs);
        //console.log(data);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
      });
  }, []);

    return(
        <div id="projects">
            <Header/>
            <Link to="/" id="back-arrow"></Link>
            <div className="projects-section">
                <div className="sideBar">
                    <h2>PROJECTS</h2>
                </div>
                <div className="line"></div>
                <div className="projectBar">
                {projects ? (
                    projects.map((project, index) => (
                        <div className="project-item" key={index}>
                            <div className="project-info">
                                <div>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <span className="links"><a href={project.repo} target="_blank" rel="noopener noreferrer"><img className="link-icon" src="./img/link.png" alt="Link icon"></img> Repository</a></span>
                            {project.url && (<span className="links"><a href={project.url} target="_blank" rel="noopener noreferrer"><img class="link-icon" src="./img/website.png" alt="Link icon"></img> Live Site</a></span>)}
                                </div>
                                {project.img && <img className={project.styles} src={`/img/projects/${project.img}`} alt="Website screenshot"></img>}
                            </div>
                        </div>
                    ))
                ) : (
                    <RotatingLines
                        strokeColor="#007bff"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="70"
                        visible={true}
                    />
                )}
                </div>
            </div>
            <div className="projects-section">
                <div className="sideBar">
                    <h2 id="designH">DESIGNS</h2>
                </div>
                <div className="line"></div>
                <div className="projectBar">
                {designs ? (
                    designs.map((design, index) => (
                        <div className="project-item" key={index}>
                            <div className="project-info">
                                <div>
                                    <h3>{design.name}</h3>
                                    <p>{design.description}</p>
                                    <span className="links"><a href={design.link} target="_blank" rel="noopener noreferrer"><img className="link-icon" src="./img/link.png" alt="link icon"></img> Figma Link</a></span>
                                </div>
                                {design.img && <img className={design.styles} src={`/img/projects/${design.img}`} alt="Website screenshot"></img>}
                            </div>
                        </div>
                    ))
                ) : (
                    <RotatingLines
                        strokeColor="#007bff"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="70"
                        visible={true}
                    />
                )}
                </div>
            </div>
        </div>
    );
}
