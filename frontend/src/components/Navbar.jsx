import { useState, useEffect } from 'react';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const day = now.toLocaleDateString("en-US", { weekday: "short" });
            const date = now.toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });
            const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
            setDateTime(` ${day}, ${date} · ${time}`);
        };

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <button id="menuToggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <div className="nav-title">Biman Singha</div>

                <ul id="navLinks" className={isMenuOpen ? "open" : ""}>
                    <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                    <li><a href="#about" onClick={handleLinkClick}>About</a></li>
                    <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
                    <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                    <li><a href="#service" onClick={handleLinkClick}>Service</a></li>
                    <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                </ul>

                <div className="nav-right">
                    <div id="datetime">{dateTime}</div>
                    <button id="darkModeBtn" onClick={toggleDarkMode}>
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
