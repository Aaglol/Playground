import { useState, useEffect } from 'react';
import Link from 'next/link';

export const AppHeader = () => {
    const [currentUrl, setCurrentUrl] = useState('');

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
                    <Link href="/">ROBIN LAVOLL</Link>
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
                </div>
            </div>

            <hr />
        </div>
    );
}