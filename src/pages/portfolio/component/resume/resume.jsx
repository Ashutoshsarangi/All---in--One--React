
import { FaDownload
} from "react-icons/fa";

import myResume from '../../resume/Ashutosh_React_6_amdocs.pdf';
import './resume.scss';
const Resume = () =>{
    return (
        <div className="resume-container" id='resume'>
            <h2 className='resume-title'>Professional Work</h2>
            <a className='download-resume' href={myResume} download='Ashutosh_React_6'><FaDownload/> Download Resume</a>
            <div className='project-container'>
                <div className='project'>
                        <h4 className='project-title'>Smart Guard — (React, Ionic) - Germany</h4>
                        <p>➔ Smart Guard is a burglar-blocking, intelligent sensor technology that
                            protects your home against intruders.
                            By using hand-held devices, the users can control and monitor their
                            home security, efficiently and cost-effectively.</p>
                        <p>➔ Devices used in the Application are Smartguard, Window Contact,
                            Siren, Remote Control And Gateway.</p>
                </div>
                <div className='project'>
                    <h4 className='project-title'>Home Ideas — (React) - India</h4>
                        <p> ➔ This is basically a B2B web application, it consists of following
                            modules i.e order, invoice, dashboard, product, notification, quick order,
                            stock check, switch user, user matrix, and cart module.
                        </p>
                </div>
                <div className='project'>
                    <h4 className='project-title'>Lightning Charts — (Typescript) - Finland</h4>
                        <p>➔ <b>Pie Chart</b> </p>
                        <p>➔ <b>Funnel Chart </b> </p>
                        <p>➔ <b>Pyramid Chart </b> </p>
                        <p>➔ The lightning chart is a chart library that can be used in web
                        development. It contains lots of chart applications and JavaScript-based
                        design templates for typography. </p>
                </div>
                <div className='project'>
                    <h4 className='project-title'>Genius App — (Angular) - Canada</h4>
                        <p>➔ This is a web application used creating CRMS for web applications.
                        There are two different phases of the application.</p>
                        <p>➔ <b>App builder </b> </p>
                        <p>➔ <b>App Runner </b> </p>
                        <p>➔ App Builder side, which is the parent web application from where we are
                        creating JSON data for new applications, pages, and components. The
                        JSON is used by another phase of the application i.e App Runner side. The
                        JSON data which is created by the builder side is consumed in this phase
                        for the rendering of the application along with its pages and respective
                        components. </p>
                </div>
            </div>
        </div>
    );
}

export default Resume;