import { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [isAppReady, setIsAppReady] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            {!isAppReady ? (
                <IntroScreen onComplete={() => setIsAppReady(true)} />
            ) : (
                <>
                    <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Service />
                    <Contact />
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
