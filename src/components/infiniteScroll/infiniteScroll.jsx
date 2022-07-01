import {useState, useEffect, useRef} from 'react';
import logo from '../../logo.svg';
import {getList} from './infiniteScroll.api';
import './infiniteScroll.scss';

const InfiniteScroll = ()=>{
    const [item, setItem] = useState([]);
    const ULRef = useRef();

    /*
        1. useEffect I need to load 10 result initially
        2. there would be a .api file which would be responsiblefor giving requested files using promises
        3. there should be a offset and limit argument need to be passed.
        4. On Scroll it will fire the event to fetch next batch data
        5. On the .api file I need to write some logic which will send the autogenerated Id and Name property with array.
    */
   useEffect(()=>{
        getNewScrollList()
   },[]);

    const getNewScrollList = async () =>{
        const result = await getList(item);
        if (result.length >= 0) {
            setItem(result);
        }
    }
    const renderedList = item.map(list => {
        return (
            <li key={list.id}><img src={list.imageUrl ? list.imageUrl: logo} alt={list.imageUrl} title="Infinite Dog Image Scroll"></img></li>
        );
    })
    const handleScroll = (e) =>{
        // The calculation Of the calling the Function is Not Proper
        /*
            I tried with couple of atricle but noting worked, So I am Parking it aside and move on
            OffsetTop, Client Height and the current Approach.
         */
        if (Math.floor(window.scrollY + e.target.scrollHeight) >= ULRef.current.scrollHeight){
            getNewScrollList();
        }

    }
    return(
        <div className="containerInfiniteScroll" >
            <h1>Infinite Scroll</h1>
            <ul className='imageContainer' onScroll={(e)=> handleScroll(e)}>
                {renderedList}
            </ul>
        </div>
    );
}

export default InfiniteScroll;