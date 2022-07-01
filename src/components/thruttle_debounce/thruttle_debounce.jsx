import {useState} from 'react';

import './thruttle_debounce.scss';

const ThruttleDebounce = () =>{
    const [counter, setCounter] = useState(0);
    const [thruttleCounter, setThruttleCounter] = useState(0);
    const [debounceCounter, setDebounceCounter] = useState(0);
    const onSimpleChange = (e) =>{
        if(e.target.value === ''){
            setCounter(0);
        }else{
            setCounter(counter+1);
        }
        
    }
    const thruttleHOF = (func, delay) =>{
        let timer;
        if(timer){
            return
        }
        return (...param) =>{
            timer = setTimeout(() => {
                func(...param);
                timer = undefined;
            }, delay);
        }
    }
    const onThruttleChange = (e) =>{
        if(e.target.value === ''){
            setThruttleCounter(0)
        }else{
            setThruttleCounter(thruttleCounter+1);
        }
    }
    const deBounceHOF = (func, delay) =>{
        let timer;
        return (...params) =>{
            clearTimeout(timer);
            timer = setTimeout(()=> func(...params), delay);
        };
    }
    const onDebounceChange = (e) =>{
        if (e.target.value === '') {
            setDebounceCounter(0);
        } else {
            setDebounceCounter(debounceCounter+1);
        }
    }
    return (
        <div className="thruttleDebounceContainer">
            <h2> Thruttling and Debouncing </h2>
            <div>
                <label>With out Debounce / Thruttle</label>
                <input type="text" onChange={(e) => onSimpleChange(e)}/>
                <span>Simple Counter : {counter}</span>
            </div>
            <div>
                <label>With Thruttle</label>
                <input type="text" onChange={(e) => thruttleHOF(onThruttleChange, 3000)(e)}/>
                <span>Thruttle Counter : {thruttleCounter}</span>
            </div>
            <div>
                <label>With Debounce</label>
                <input type="text" onChange={(e) => deBounceHOF(onDebounceChange, 3000)(e)}/>
                <span>Debounce Counter : {debounceCounter}</span>
            </div>
        </div>
    );
}

export default ThruttleDebounce;