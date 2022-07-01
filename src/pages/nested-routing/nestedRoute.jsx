
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import A from './A';
import B from './B';
import C from './C';


const NestedRoute = () =>{
    return (
        <div>
            <BrowserRouter>
                <ul>
                    <li> <Link to={'/nested-route/A'}> A</Link> </li>
                    <li> <Link to={'/nested-route/B'}> B</Link> </li>
                    <li> <Link to={'/nested-route/C'}> C</Link> </li>
                </ul>
                <Switch>
                    <Route path={'/nested-route/A'} exact strict component={A}/>
                    <Route path={'/nested-route/B'} exact strict component={B}/>
                    <Route path={'/nested-route/C'} exact strict component={C}/>
                </Switch>
            </BrowserRouter>

        </div>
    );
}
export default NestedRoute;