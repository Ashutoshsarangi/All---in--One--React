


const Skill = () =>{
    return (
        <>
            <div className='skills'>
                <h2 className='about-title'> skills </h2>
                <p className='skill-type'> HTML 85%</p>
                <div className='progress-bar-parent'>
                    <div className='progress' style={{width: '85%'}}></div>
                </div>
                <p className='skill-type'> CSS 70%</p>
                <div className='progress-bar-parent'>
                    <div className='progress' style={{width: '70%'}}></div>
                </div>
                <p className='skill-type'> JAVASCRIPT 90%</p>
                <div className='progress-bar-parent'>
                    <div className='progress' style={{width: '90%'}}></div>
                </div>
                <p className='skill-type'> REACT 85%</p>
                <div className='progress-bar-parent'>
                    <div className='progress' style={{width: '85%'}}></div>
                </div>
            </div>
        </>
    );
}

export default Skill;