import { useSelector } from 'react-redux';

import { appIsLoggedIn } from '@/store/slices/appSlice';
import { Button } from '../Button';
import { useState, useEffect } from 'react';

export const AppHeader = () => {
    const [currentUrl, setCurrentUrl] = useState('');

    const loggedIn = useSelector(appIsLoggedIn);
    
    useEffect(() => {
        console.log('current: ', window);
        if (window) {
            setCurrentUrl(window.location.href);
        }
    }, []);

    return (
        <div className="appHeader">
            <div className="headerTop">
                <div className="headerLogo">
                    <a href="/">PLAYGROUND</a>
                </div>
                <div className="headerRight">
                    <a 
                        className={currentUrl === '' ? ' active' : ''} 
                        href="/"
                    >
                        Hjem
                    </a>
                    <a 
                        className={currentUrl === '/about' ? ' active' : ''} 
                        href="/about"
                    >
                        Om
                    </a>
                    {loggedIn && (
                        <a 
                            className={currentUrl === '/user' ? ' active' : ''} 
                            href="/user"
                        >
                            Profil
                        </a>
                    )}
                    {loggedIn && (
                        <a 
                            className={currentUrl === '/user/logout' ? ' active' : ''} 
                            href="/user/logout"
                        >
                            Logg ut
                        </a>
                    )}
                </div>
            </div>

            <hr />
        </div>
    );
}