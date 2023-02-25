import { useSelector } from 'react-redux';

import { appIsLoggedIn } from '@/store/slices/appSlice';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const AppHeader = () => {
    const [currentUrl, setCurrentUrl] = useState('');
    const [isReady, setIsReady] = useState(false);

    const loggedIn = useSelector(appIsLoggedIn);
    
    useEffect(() => {
        if (window) {
            setCurrentUrl(window.location.href);
            setIsReady(true);
        }
    }, []);

    return isReady && (
        <div className="appHeader">
            <div className="headerTop">
                <div className="headerLogo">
                    <a href="/">PLAYGROUND</a>
                </div>
                <div className="headerRight">
                    <Link 
                        className={currentUrl === '' ? ' active' : ''} 
                        href="/"
                    >
                        Hjem
                    </Link>
                    <Link
                        className={currentUrl === '/about' ? ' active' : ''} 
                        href="/about"
                    >
                        Om
                    </Link>
                    {loggedIn && (
                        <Link 
                            className={currentUrl === '/user' ? ' active' : ''} 
                            href="/user"
                        >
                            Profil
                        </Link>
                    )}
                    {loggedIn && (
                        <Link
                            className={currentUrl === '/user/logout' ? ' active' : ''} 
                            href="/user/logout"
                        >
                            Logg ut
                        </Link>
                    )}
                </div>
            </div>

            <hr />
        </div>
    );
}