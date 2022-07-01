import React, {useEffect, useState} from 'react';
import {simulationApi} from '../../../../simulationApi'; 



const BasicComponent = () =>{
    const [data, setData] = useState({num: 0, person:[]});
    useEffect(()=>{
        const temp = simulationApi();
        setTimeout(()=>{
            console.log(temp)
            setData(temp);
        }, 1000);
    }, []);
    return (
        <div>
            <h1>basic Component {data.num}</h1>
            <p>{data.person.map(member => member.name)}</p>
        </div>
    );
}

export default BasicComponent;
// export default React.memo(BasicComponent); React Memo Did not work the useEffect is loaded again and again
// May be in future we will get some good example on React Memo.