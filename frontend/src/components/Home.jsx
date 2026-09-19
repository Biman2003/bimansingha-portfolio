const Home = () => {
    return (
        <section id="home">
            <div className="profile-popout">
                <img src="/my img.jpeg" alt="Biman Singha" />
            </div>
            <h1>Biman Singha</h1>
            <p>Computer Science &amp; Engineering</p>
            <div className="hero-buttons">
                <a href="#contact" className="btn"><i className="fa-solid fa-envelope"></i>&nbsp;Contact Me</a>
                <a href="public\my resume.pdf" target="_blank" className="btn btn-outline"><i className="fa-solid fa-eye"></i>&nbsp;View Resume</a>
            </div>
        </section>
    );
};

export default Home;
