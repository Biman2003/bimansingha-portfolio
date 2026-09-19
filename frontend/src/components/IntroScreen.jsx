import { useState, useEffect } from 'react';

const IntroScreen = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

    useEffect(() => {
        if (step === 1) {
            const timer = setTimeout(() => {
                setStep(2);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [step]);

    const handleEnvelopeClick = () => {
        if (isEnvelopeOpen) return; // Prevent multiple clicks
        setIsEnvelopeOpen(true);
        setTimeout(() => {
            onComplete();
        }, 1000);
    };

    return (
        <div className="intro-container">
            {/* Simple starry background effect */}
            <div className="stars"></div>
            <div className="twinkling"></div>

            {step === 1 ? (
                <div className="loading-screen">
                    <div className="logo-ring">
                        <span className="logo-text">BS</span>
                    </div>
                    <p className="loading-text">L O A D I N G . . .</p>
                </div>
            ) : (
                <div className="welcome-screen">
                    <h1 className="welcome-title">Welcome to My <span className="highlight-blue">Portfolio</span></h1>
                    <h2 className="welcome-subtitle">Hi, I'm <span className="highlight-blue">Biman Singha</span></h2>
                    <p className="welcome-role">F U L L - S T A C K - D E V E L O P E R</p>

                    <button className="open-btn letter-box-btn" onClick={handleEnvelopeClick} title="Open Portfolio" style={{ transform: isEnvelopeOpen ? 'scale(1.1)' : 'scale(1)' }}>
                        <i className={`fa-solid ${isEnvelopeOpen ? 'fa-envelope-open-text' : 'fa-envelope'} fa-3x`}></i>
                    </button>

                    <p className="welcome-motto">" Code | Build | Create | Grow "</p>
                </div>
            )}
        </div>
    );
};

export default IntroScreen;
