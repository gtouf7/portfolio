import './styles/header.css'
import { useEffect } from 'react';

export default function Header() {
    const bracket = "{";

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '/scripts/scroll-header.js';
        script.async = true;

        document.body.appendChild(script);

        return() => {
            document.body.removeChild(script);
        };
    }, []);
    return(
            <>
                <div id="header">
                    <span id="bracket-top" aria-hidden="true">{bracket}</span>
                    <button type="button" className="logo-top" onClick={scrollToTop} aria-label="Scroll to top">GT</button><h2 id="underscore" className="logo-top" aria-hidden="true">_</h2>
                    <nav id="main-nav" aria-label="Primary">
                        <ul>
                            <li><a className="nav-item" href="#about">About</a></li>
                            <li><a className="nav-item" href="#skills">Skills</a></li>
                            <li><a className="nav-item" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div id="socials">
                        <a href="https://github.com/gtouf7" target="_blank" rel="noopener noreferrer"><img id="ghLogo" src="/img/socials/gh-fff.svg" alt="Github logo"></img></a>
                        <a href="https://www.linkedin.com/in/georgiostoufexis7/" target="_blank" rel="noopener noreferrer"><img id="liLogo" className="socials-img" src="/img/socials/li-fff.svg" alt="LinkedIn logo"></img></a>
                        <a href="https://www.instagram.com/gtouf7" target="_blank" rel="noopener noreferrer"><img id="igLogo" className="socials-img" src="/img/socials/ig-fff.svg" alt="Instagram logo"></img></a>
                    </div>
                </div>
            </>
    );
}
