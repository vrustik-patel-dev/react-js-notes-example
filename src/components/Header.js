import React from 'react';
import logo from '../Images/Notes.png';

import '../Csss/Header.css';

const Header = () => {
    return <>
        <div className="Headerback" >
            <img src={logo} alt="logo" />
            <h1 className="headText">Notes</h1>
        </div>
    </>;
}

export default Header;