import {useState} from 'react';
import Header from './component/header';
import SwitchComponent from './switchComponent';




const Caching =  () => {
    const [flag, setFlag] = useState('useEffect');
    const [num, setNum] = useState(1);
    
    const clickHandler = type =>{
        setFlag(type);
        setNum(1);
    }
    const addComponent = () =>{
        setNum((num) => num+1);
    }

    return (
        <div>
            <h1 style={{'textAlign':'center'}}>Caching</h1>
            <Header clickHander={clickHandler} addComponent={addComponent}/>
            {/* For the Bellow Code we need to use switch Componenet
             */}
             {
                [...Array(num)].map( _ => <SwitchComponent flag={flag}/>)
             }
            
            {/* {
                (flag === 'useEffect') && [...Array(num)].map( _ => <BasicComponent/>)
            }
            {
                (flag === 'memorize') && [...Array(num)].map( _ => <Memorize/>)
            } */}
            {
                // (flag === 'useEffect') && [...Array(num)].map( _ => <BasicComponent/>)
            }
            {
                // (flag === 'useEffect') && [...Array(num)].map( _ => <BasicComponent/>)
            }
        </div>
    );
}

export default Caching;