import { AppBody } from '@/components/layout/AppBody';
import { useEffect } from 'react';
import Router from 'next/router';

export default function NotFound() {

    useEffect(() => {
        setTimeout(() => {
            Router.push('/frontpage');
        }, 500);
    }, []);

    return (
        <AppBody page='Forside'>
            <div className="container">
                <div className="container-title">
                    Ikke tillat, omdirigerer til forsiden.
                </div> 
            </div>
        </AppBody>
    );
};
