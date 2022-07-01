import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { FaLinkedinIn, FaHackerrank, 
    FaGithubSquare
} from "react-icons/fa";
import './home.css';
const Home = () =>{
    return (
        <div className='home-container' id='home'>
            <div>
                <h1 className='title'> I'm Ashutosh Sarangi</h1>
                <Typed
                strings={[
                    'A Developer |',
                    'A Mentor |',
                    'A Student (Always) |']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr='placeholder'
                    loop >
                    <input type='text' className='sub-title' disabled/>
                </Typed>
                <div className='home-icon-container'>
                    <a className="a-icon" href="https://www.linkedin.com/in/ashutosh-sarangi-4a220a138/" target='_blank' rel="noreferrer"> 
                        <FaLinkedinIn className='home-icon' />
                    </a>
                    <a className="a-icon" href="https://www.hackerrank.com/LIPUNI" target='_blank' rel="noreferrer">
                        <FaHackerrank className='home-icon'/>
                    </a>
                    <a className="a-icon" href="https://github.com/Ashutoshsarangi" target='_blank' rel="noreferrer">
                        <FaGithubSquare className='home-icon'/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;