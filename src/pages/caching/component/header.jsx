

import './header.css';
const Header = ({clickHander, addComponent}) =>{

    const clickProcess = event =>{
        clickHander(event.target.id);
    }
    return (
        <nav className='caching-header'>
            <h3>Caching</h3>
            <ul className='caching-ul' onClick={(e) => clickProcess(e)}>
                <li className='caching-li' id='useEffect'> UseEffect & useState</li>
                <li className='caching-li' id='memorize'>Memorize</li>
                <li className='caching-li' id='context'>Context</li>
                <li className='caching-li' id='useMemo'>useMemo</li>
            </ul>
            <h3 onClick={addComponent}> Add Component</h3>
        </nav>
    );
}

export default Header;