
import sideLineProjects from './work.constant';
import './work.scss';
const Work = ()=>{
    return (
        <div className='work-container' id='work'>
            <h2 className='work-title'>Sideline Work</h2>
            <div className='sideline-project-container'>
                {
                    sideLineProjects.map(project => {
                        return (
                            <a className='sideline-project' key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
                                <img src={project.titleImage} alt='Respective Sideline Profile'/>
                                <h2 style={{fontWeight: '450', fontSize: '1.3rem'}}>{project.title}</h2>
                            </a>
                        );
                    })
                }
            </div>

        </div>
    );
}

export default Work;