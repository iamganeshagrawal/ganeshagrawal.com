import CustomHead from '../components/CustomHead';
import Intro, {sectionList} from '../components/section/Intro';
import About from '../components/section/About'
import { useState, useRef, useEffect } from 'react';

const inBtw = (value, min, max) => {
    return (value > min && value < max)
}

const Home = () => {
    const [section, setSection] = useState('');
    useEffect(() => {
        console.log(section)
    })
    return (
        <>
            <CustomHead title="Ganesh Agrawal - Software Engineer" />
            <Intro activeSection={section} />
            {/* <About /> */}
            <SectionDiv id={sectionList[0]} color="red" onScreen={setSection} />
            <SectionDiv id={sectionList[1]} color="blue" onScreen={setSection} />
        </>
    )
}

const SectionDiv = ({id, color, onScreen}) => {
    const ref = useRef(null);
    const handleScroll = () => {
        if(ref.current) {
            // console.log(id, ref.current.getBoundingClientRect())
            const {top, bottom} = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if(inBtw(top,0,windowHeight * 0.25) || inBtw(bottom,windowHeight * 0.75, windowHeight)){
                console.log(id);
                onScreen(id);
            }
            // console.log(id, inBtw(top,0,windowHeight * 0.25))
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    return (
        <div ref={ref} id={id} style={{height: '100vh', backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <h1>{id}</h1>
        </div>
    )
}

export default Home;