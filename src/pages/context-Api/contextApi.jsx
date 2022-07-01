
import React from 'react';
import {addition, substraction, multiplication} from './shared/shared';
import './contextApi.scss';
import Child from './component/child';
export const ReactContext = React.createContext();

const ContextApi = ()=>{

    return (
        <div className='context-api-container'>
            <h2>Context API Demo</h2>
            <ReactContext.Provider value={{addition, substraction, multiplication}}>
                <Child/>
            </ReactContext.Provider>
        </div>
    );
}

export default ContextApi;