
import BasicComponent from './component/basicComponent/basicComponent';
import Memorize from './component/memorize/memorize';

const SwitchComponent = ({flag}) =>{
    switch(flag){
        case 'useEffect':
            return <BasicComponent/>;
        case 'memorize':
            return <Memorize/>
        default:
            return <h1>Fall Back Component</h1>;
    }
}

export default SwitchComponent;