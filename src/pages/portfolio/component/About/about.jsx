import { useEffect } from 'react';
import './about.scss';
import Description from './component/description';
import Intro from './component/intro';
import Skill from './component/skill';
const About = () =>{

    return (
    <div className="about-container" id='about'>
        <div className='skill-section'>
            <Intro/>
            <Skill/>
        </div>
        <Description/>
    </div>
)};

export default About;