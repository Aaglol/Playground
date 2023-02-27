import { useSelector } from 'react-redux';

import { appIsLoggedIn, appCurrentUser } from '@/store/slices/appSlice';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const AppHeader = () => {
    const [currentUrl, setCurrentUrl] = useState('');

    const loggedIn = useSelector(appIsLoggedIn);
    const currentUser = useSelector(appCurrentUser);
    const pathname = typeof window !== 'undefined' && window.location.pathname;
    useEffect(() => {
        if (window) {
            setCurrentUrl(window.location.pathname);
        }
    }, [pathname]);

    return (
        <div className="appHeader">
            <div className="headerTop">
                <div className="headerLogo">
                    <a href="/">PLAYGROUND</a>
                </div>
                <div className="headerRight">
                    <Link 
                        className={currentUrl === '/' ? ' active' : ''} 
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
                            className={currentUrl.indexOf('/user') > -1 ? ' active' : ''} 
                            href="/user"
                        >
                            {currentUser.username}
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