import React from 'react';
import Logotype from './Logotype';
import logo from '../assets/logo-neo.svg';

export default function Header() {
    return (
        <React.Fragment>
            <header className="App-header">
                <Logotype svg={logo}/>
            </header>
        </React.Fragment>
    );
}
