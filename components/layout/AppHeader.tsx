import { useSelector } from 'react-redux';

import { appIsLoggedIn, appCurrentUser } from '@/store/slices/appSlice';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dropdown, Item } from '../Dropdown';

export const AppHeader = () => {
    const [currentUrl, setCurrentUrl] = useState('');

    const loggedIn = useSelector(appIsLoggedIn);
    const currentUser = useSelector(appCurrentUser);
    const pathname = typeof window !== 'undefined' && window.location.pathname;
    
    const dropdownItems: Array<Item> = [
        {
            name: 'Profile',
            href: '/user/profile',
        },
        {
            name: 'Familie',
            href: '/user/family',
        },
        {
            name: 'Innstillinger',
            href: '/user/settings',
        },
        {
            name: 'Logg ut',
            href: '/user/logout',
        }
    ];
    
    useEffect(() => {
        if (window) {
            setCurrentUrl(window.location.pathname);
        }
    }, [pathname]);

    return (
        <div className="appHeader">
            <div className="headerTop">
                <div className="headerLogo">
                    <Link href="/">PLAYGROUND</Link>
                </div>
                <div className="headerRight">
                    <div>
                        <Link 
                            className={currentUrl === '/' ? ' active' : ''} 
                            href="/"
                        >
                            Hjem
                        </Link>
                    </div>
                    <div>
                        <Link
                            className={currentUrl === '/about' ? ' active' : ''} 
                            href="/about"
                        >
                            Om
                        </Link>
                    </div>
                    {loggedIn ? (
                        <Dropdown 
                            buttonText={currentUser.username}
                            items={dropdownItems}
                            isActive={currentUrl}
                        />
                    ) : (
                        <div>
                            <Link
                                className={currentUrl === '/profile' ? ' active' : ''} 
                                href="/user/profile"
                            >
                                Logg inn
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <hr />
        </div>
    );
}