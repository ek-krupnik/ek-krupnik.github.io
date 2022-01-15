import React from 'react';
import Logo from './Logo';
import Background from './Background';
import './Style.css'

function Header() {
    return (
        <div className='background_up'>
            <Logo/>
            <Background />
        </div>
    )
}

export default Header;