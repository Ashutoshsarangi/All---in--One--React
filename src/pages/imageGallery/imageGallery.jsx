import {useState} from 'react'; 
import './imageGallery.css';
import pic1 from '../../images/pic1.jpg';
import pic2 from '../../images/pic2.jpg';
import pic3 from '../../images/pic3.jpg';
import pic4 from '../../images/pic4.jpg';
import pic5 from '../../images/pic5.jpg';

const ImageGallery = ({}) =>{
    const [selectedImage, setSelectedImage] = useState(pic1);
    const [flag, setFlag] =  useState(false);
    const [btnName, setBtnName] = useState('Darken');
    const imageArr = [pic1, pic2, pic3, pic4, pic5];
    const setImage = img => setSelectedImage(img);
    const setButtonName = (val) =>{
        if(val){
            setBtnName('Lighten')
        }
        else{
            setBtnName('Darken');
        } 
        setFlag(val);
    }
    return (
    <div className='container'>
        <h1>Image gallery example</h1>
        <div className="full-img">
            <img className="displayed-img" src={selectedImage} alt=""/>
            <div className={flag ? 'overlay darker': 'overlay'}></div>
            <button className="dark" onClick={()=> setButtonName(!flag)}>{btnName}</button>
        </div>
        <div className="thumb-bar">
            {
                imageArr.map( imgSrc => <img src={imgSrc} alt={imgSrc} onClick={() => setImage(imgSrc)}/>)
            }
        </div>
    </div>
    );
}

export default ImageGallery;