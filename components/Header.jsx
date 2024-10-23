import './styles/header.css'
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Header() {
    const bracket = "{";
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
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
                    <span id="bracket-top">{bracket}</span>
                    <h2 className="logo-top" onClick={handleLogoClick}>GT</h2><h2 id="underscore" className="logo-top">_</h2>
                    <div id="socials">
                        <a href="https://github.com/gtouf7" target="_blank" rel="noopener noreferrer"><img id="ghLogo" src="/img/socials/gh-fff.svg" alt="Github logo"></img></a>
                        <a href="https://www.linkedin.com/in/georgiostoufexis7/" target="_blank" rel="noopener noreferrer"><img id="liLogo" className="socials-img" src="/img/socials/li-fff.svg" alt="LinkedIn logo"></img></a>
                        <a href="https://www.instagram.com/gtouf7" target="_blank" rel="noopener noreferrer"><img id="igLogo" className="socials-img" src="/img/socials/ig-fff.svg" alt="Instagram logo"></img></a>
                    </div>
                </div>
            </>
    );
}