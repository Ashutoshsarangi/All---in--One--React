import React from 'react';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';
import Home from './Home';
import InfiniteScroll from './components/infiniteScroll/infiniteScroll.jsx';
import ThruttleDebounce from './components/thruttle_debounce/thruttle_debounce.jsx';
import EComm from './pages/EComm/e_comm';
import ImageGallery from './pages/imageGallery/imageGallery';
import NestedRoute from './pages/nested-routing/nestedRoute';
import Caching from './pages/caching/caching';
import MemoDemo from './pages/memoDemo/memoDemo';
import PropTypeDemo from './pages/prop-type-demo/propTypeDemo';
import Portfolio from './pages/portfolio/portfolio';
import ContextApi from './pages/context-Api/contextApi';
import ErrorBoundary from './pages/error-boundary/errorBoundaryDemo';
import Focus from './pages/focus/focus';

import './App.css';

function App() {
  return (
    <div >
    <BrowserRouter>
    <h1>Topics Covered</h1>
    <div className='linkContainer'>
      <ul>
        <li> <Link to={'/'}> Home </Link> </li>
        <li> <Link to={'/Infinite-scroll'}> Infinite Scroll </Link> </li>
        <li> <Link to={'/thruttle-debounce'}> Thruttle Debounce </Link> </li>
        <li> <Link to={'/ecomm'}> Multiple reducer Demo </Link> </li>
        <li> <Link to={'/image-gallery'}>Image Gallery </Link> </li>
      </ul>
      <ul>
        <li> <Link to={'/nested-route'}> Nested Routing </Link> </li>
        <li> <Link to={'/memo'}> Demo on React Memo </Link> </li>
        <li> <Link to={'/prop-type'}> Demo on Prop type </Link> </li>
        <li> <Link to={'/portfolio'}> Portfolio </Link> </li>
        <li> <Link to={'/context-api'}> Context Api </Link> </li>
      </ul>
      <ul>
        <li> <Link to={'/caching'}> React Cache Techniques </Link> </li>
        <li> <Link to={'/error-boundary'}>Error Boundary </Link> </li>
        <li> <Link to={'/focus'}>Focus App </Link> </li>
      </ul>
    </div>
    
    <Switch>
      <Route path={'/'} exact key='home' component={Home}/>
      <Route path={'/Infinite-scroll'} exact strict key='about' component={InfiniteScroll}/>
      <Route path={'/thruttle-debounce'} key='contact' exact strict component={ThruttleDebounce}/>
      <Route path={'/ecomm'} key='ecomm' exact strict component={EComm}/>
      <Route path={'/image-gallery'} key='image_gallery' exact strict component={ImageGallery}/>
      <Route path={'/nested-route'} key='nested-route' exact strict component={NestedRoute}/>
      <Route path={'/caching'} key='caching' exact strict component={Caching}/>
      <Route path={'/memo'} key='memo' exact strict component={MemoDemo}/>
      <Route path={'/prop-type'} key='prop-type' exact strict component={PropTypeDemo}/>
      <Route path={'/portfolio'} key='portfolio' exact strict component={Portfolio}/>
      <Route path={'/context-api'} key='context-api' exact strict component={ContextApi}/>
      <Route path={'/error-boundary'} key='error-boundary' exact strict component={ErrorBoundary}/>
      <Route path={'/focus'} key='focus' exact strict component={Focus}/>
    </Switch>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
