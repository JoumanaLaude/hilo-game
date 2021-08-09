import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="text-center p-2">
                    <a href="https://github.com/JoumanaLaude/hilo-game" aria-label="GitHub" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="mt-1 fa-5x fa-fw icon" />
                        </a>
                </div>
            </div>

        </footer>
    );
}


export default Footer;
