import { AppBody } from '@/components/layout/AppBody';
import { useEffect } from 'react';
import Router from 'next/router';

export const PAGE_REDIRECT = 'PAGE_REDIRECT';

export default function Redirect() {

    useEffect(() => {
        setTimeout(() => {
            Router.push('/frontpage');
        }, 500);
    }, []);

    return (
        <AppBody page={PAGE_REDIRECT}>
            <div className="container">
                <div className="container-title">
                    Ikke tillat, omdirigerer til forsiden.
                </div> 
            </div>
        </AppBody>
    );
};
