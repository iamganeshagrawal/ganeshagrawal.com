import React, { useRef, useState, useEffect } from "react";

const Intro = ({activeSection}) => {
	const [isSticky, setSticky] = useState(false);
	const navBarRef = useRef(null);
	const handleScroll = () => {
		if(navBarRef.current){
			setSticky(navBarRef.current.getBoundingClientRect().top <= 10);
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		}
	}, []);
    return (
		<>
		<div className="top-decorations">
		</div>
        <section id="intro" className="intro">
			<div className="container info">
				<h1>Ganesh Agrawal</h1>
				<div className="line"></div>
				<h4>Software Engineer</h4>
			</div>
			<div className={`navbar-wrapper`} ref={navBarRef}>
				<nav id="nav" className={`navbar${isSticky ? ' sticky' : ''}`}>
					<a href="#aboutme" className={activeSection==sectionList[0] ? 'current' : ''}><span>About </span>me</a>
					<a href="#skills" className={activeSection==sectionList[1] ? 'current' : ''}>Ski<span>lls</span></a>
					<a href="#experience" className={activeSection==sectionList[2] ? 'current' : ''}>Exp<span>erience</span></a>
					<a href="#education" className={activeSection==sectionList[3] ? 'current' : ''}>Edu<span>cation</span></a>
					<a href="#portfolio" className={activeSection==sectionList[4] ? 'current' : ''}>Por<span>tfolio</span></a>
					<a href="#contact" className={activeSection==sectionList[5] ? 'current' : ''}>Con<span>tact</span></a>
				</nav>
			</div>
		</section>
		</>
    )
}
export const sectionList = ["aboutme", "skills", "experience", "education", "portfolio", "contact"]
export default Intro;