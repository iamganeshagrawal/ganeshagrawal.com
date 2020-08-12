const About = () => {
    return (
        <section id="aboutme" className="section">
			<div className="container">
				<div className="row">
					<div className="col-full">
						<h2 className="section-title">About me</h2>
						<div className="centered line"></div>
					</div>
				</div>

				<div className="row section-content">
					<div className="col-1-3" style={{textAlign: 'center'}}>
						<img alt="This is me!" style={{height: '444px'}} src="http://www.kaiwa-projects.com/assets/img/photo.jpg" />
					</div>
					<div className="col-1-3">
						<h4>Hi, It's me!</h4>

						<p>I like building awesome software. I've built websites, browser plugins, corporate software and even games! If you are interested, you can view some of my favorite projects in my <a href="#portfolio">portfolio</a> down below.</p><p>Need something built or simply want to have chat? Reach out to me on social media or send me an <a href="#contact">email</a>.</p>
						<ul className="social-links clearfix">
							<li><a href="https://www.twitter.com/Ka1wa" target="_blank" title="Twitter"><i className="fa fa-twitter"></i>FB</a></li>
							<li><a href="https://www.facebook.com/ka1wa"  target="_blank" title="Facebook"><i className="fa fa-facebook"></i>TW</a></li>
							<li><a href="https://www.github.com/ka1wa"  target="_blank" title="Github"><i className="fa fa-github"></i></a>Git</li>
							<li><a href="https://www.linkedin.com/in/kaiwa" title="LinkedIn"><i className="fa fa-linkedin"></i></a>LI</li>
						</ul>
					</div>
					<div className="col-1-3">
						<h4>My personal interests</h4>
						
						<p>When I am not <a href="#skills">coding</a> my next project, I enjoy spending my time doing any of the following:</p><ul><li>I love <strong>learning Korean</strong>;</li><li>I am watching my favorite <strong>eSports</strong> games;</li><li>I am <strong>brainstorming</strong> at conferences around the world;</li><li>And I am <strong>meeting more people</strong> and creating new opportunities.</li></ul>					</div>
				</div>
			</div>
		</section>
    )
}

export default About;