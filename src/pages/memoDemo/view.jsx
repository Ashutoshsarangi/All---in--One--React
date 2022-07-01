import React from 'react';
import UseRenderCounter from "../../useRenderCounter";

const View = ({name}) =>{
    return (
        <div>
            {UseRenderCounter('View')}
            <h1>{name}</h1>
        </div>
    );
}

export default React.memo(View);