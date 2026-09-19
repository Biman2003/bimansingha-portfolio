const About = () => {
    return (
        <section id="about">
            <h2><i className="fa-solid fa-user"></i>&nbsp;About Me</h2>
            <div className="about-flex">
                <div className="about-text">
                    <p>Hi, I'm Biman Singha, an undergraduate student in Computer Science &amp; Engineering (2022 - 2026).</p>
                    <p>I enjoy building websites and solving problems using code. I am always learning new tools and technologies to improve my skills.</p>
                </div>

                <div className="education">
                    <h3><i className="fa-solid fa-graduation-cap"></i>&nbsp;Education</h3>

                    <div className="edu-item">
                        <div className="edu-year"><i className="fa-solid fa-calendar"></i>&nbsp;2022 - 2026</div>
                        <h4><i className="fa-solid fa-graduation-cap"></i>&nbsp;B.Tech in Computer Science &amp; Engineering</h4>
                        <p>&nbsp;Future Institut of Technology</p>
                        <p>&nbsp;Grade: </p>
                    </div>

                    <div className="edu-item">
                        <div className="edu-year"><i className="fa-solid fa-calendar"></i>&nbsp;2020 - 2022</div>
                        <h4><i className="fa-solid fa-graduation-cap"></i>&nbsp;Higher Secondary (Science) under WBCHSE</h4>
                        <p>&nbsp;PURBA CHILKA LALCHAND HIGH SCHOOL</p>
                        <p>&nbsp;Grade: A+</p>
                    </div>

                    <div className="edu-item">
                        <div className="edu-year"><i className="fa-solid fa-calendar"></i>&nbsp;2020</div>
                        <h4><i className="fa-solid fa-graduation-cap"></i>&nbsp;Secondary School under WBBSE</h4>
                        <p>&nbsp;DAYALCHAK B.B.J. VIDYAPITH (H.S.)</p>
                        <p>&nbsp;Grade: A</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
