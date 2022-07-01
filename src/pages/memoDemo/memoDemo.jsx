import {useEffect, useState} from 'react';
import View from "./view";


const MemoDemo = ()=>{
    const names = ["Peter", "Bruce", "Clark"];
    const [state, setState] = useState({ name: "Anonymous" });

    const generateName = () => names[0];
    useEffect(()=>{
        setInterval(() => {
            const name = generateName();
            setState({ name });
          }, 1000);
    },);
    return (
        <div>
            <h1>Demo On Memo</h1>
            <View name ={state.name} />
        </div>
    );
}
export default MemoDemo;