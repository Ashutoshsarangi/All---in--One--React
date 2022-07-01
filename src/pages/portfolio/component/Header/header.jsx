import { useState } from 'react';

import './header.css';

const Header = ({sticky, scrolledSection}) =>{
    
    const menu = [
        {link:"#home", name: 'HOME', key: '111', active: false},
        {link:"#about", name: 'ABOUT', key: '112', active: false},
        {link:"#resume", name: 'RESUME', key: '113', active: false},
        {link:"#work", name: 'WORK', key: '114', active: false},
        {link:"#testimonials", name: 'TESTIMONIALS', key: '115', active: false},
        {link:"#contact", name: 'CONTACT', key: '116', active: false},
    ];

    
    
    return (
        <header id='header' className={sticky ? 'fixed-top sticky' : 'fixed-top'}>
            <nav id="navbar" className="navbar ">
                {
                    menu.map( item => <a className={(item.active || item.key === scrolledSection) ? 'nav-link active': 'nav-link'} key={item.key}href={item.link}>{item.name}</a> )
                }
            </nav>
        </header>
    );
}

export default Header;