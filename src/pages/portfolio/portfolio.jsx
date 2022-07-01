import {useState, useEffect} from 'react';
import { FaArrowUp
} from "react-icons/fa";

import Header from "./component/Header/header";
import Home from "./component/Home/Home";
import About from "./component/About/about";
import Resume from './component/resume/resume';
import Work from './component/work/work';
import Testimonial from './component/testimonial/testimonial';
import Contact from './component/contact/contact';

import './portfolio.css'

const Portfolio = () =>{
    // const headerRef = useRef();
    const [sticky, setSticky] = useState(false);
    const [scrolledSection, setScrolledSection] = useState('111');

    useEffect(()=>{
       window.onscroll = ScrollFun;
    });
    const ScrollFun = () =>{
        if(window.pageYOffset < 799){
            setScrolledSection('111');
        }
        else if(window.pageYOffset >= 800 && window.pageYOffset <= 1170){
            setScrolledSection('112')
        }
        else if(window.pageYOffset >= 1471 && window.pageYOffset <= 2370){
            setScrolledSection('113')
        }
        else if(window.pageYOffset >= 2371 && window.pageYOffset <= 2770){
            setScrolledSection('114')
        }
        else if(window.pageYOffset >= 2772 && window.pageYOffset <= 3070){
            setScrolledSection('115')
        }
        else if(window.pageYOffset >= 3070 && window.pageYOffset <= 3670){
            setScrolledSection('116')
        }
        if(window.pageYOffset > 800){
            setSticky(true);
        }else{
            setSticky(false);
        }
    }
    return (
        <div className="parent-container" >
            <Header sticky={sticky} scrolledSection={scrolledSection}/>
            <Home/>
            <About/>
            <Resume/>
            <Work/>
            <Testimonial/>
            <Contact/>
            <a href='#home' className='goto-top'><FaArrowUp style={{marginTop: '21px'}}/></a>
        </div>
    );
}

export default Portfolio;