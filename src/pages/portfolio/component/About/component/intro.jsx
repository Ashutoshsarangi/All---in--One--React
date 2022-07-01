
import Dp1 from '../../../images/Dp1.jpeg';


const Intro = () =>{
    return (
        <>
            <div className='brief-intro'>
                <img src={Dp1} alt="my Profile" className='about-dp'/>
                <div>
                    <p><span className='about-attrs'>Name:</span> <span className='about-attr-subtitle'>Ashutosh Sarangi</span> </p>
                    <p><span className='about-attrs'>Profile:</span> <span className='about-attr-subtitle'>Advance Software Developer(React)</span>  </p>
                    <p><span className='about-attrs'>Email:</span> <span className='about-attr-subtitle'>ashutoshsarangi95@gmail.com</span> </p>
                    <p><span className='about-attrs'>Phone:</span> <span className='about-attr-subtitle'>(+357) 95744640</span> </p>
                </div>
            </div>
        </>
    );
}

export default Intro;