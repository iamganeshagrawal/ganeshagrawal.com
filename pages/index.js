import CustomHead from '../components/CustomHead';
import Intro, { sectionList } from '../components/section/Intro';
import About from '../components/section/About'
import { useState, useRef, useEffect } from 'react';

const inBtw = (value, min, max) => {
    return (value > min && value < max)
}

const Home = () => {
    const [section, setSection] = useState(null);
    useEffect(() => {
        console.log(section)
    })
    return (
        <>
            <CustomHead title="Ganesh Agrawal - Software Engineer" />
            <Intro activeSection={section} />
            {/* <About /> */}
            <SectionDiv id={sectionList[0]} color="#91d18b" onScreen={setSection} firstSection />
            <SectionDiv id={sectionList[1]} color="#ea5455" onScreen={setSection} />
            <SectionDiv id={sectionList[2]} color="#776d8a" onScreen={setSection} />
            <SectionDiv id={sectionList[3]} color="#3c2c3e" onScreen={setSection} />
            <SectionDiv id={sectionList[4]} color="#1b262c" onScreen={setSection} />
            <SectionDiv id={sectionList[5]} color="#158467" onScreen={setSection} />
        </>
    )
}

const SectionDiv = ({ id, color, onScreen, firstSection = false }) => {
    const ref = useRef(null);
    const handleScroll = () => {
        if (ref.current) {
            const { top, bottom } = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (firstSection && inBtw(top, windowHeight * 0.75, windowHeight)) {
                onScreen(null);
            }
            if (inBtw(top, 0, windowHeight * 0.25) || inBtw(bottom, windowHeight * 0.75, windowHeight)) {
                // console.log(id);
                onScreen(id);
            }
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div ref={ref} id={id} style={{ height: '100vh', backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1>{id}</h1>
        </div>
    )
}

export default Home;