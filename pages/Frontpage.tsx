import { useEffect } from 'react';

import { AppBody } from '@/components/layout/AppBody';

export default function Frontpage() {

    return (
        <AppBody page='Forside'>
            <div className="container"> 
                <div className="container-title">
                    Du er nå logget inn!
                </div>
            </div>
        </AppBody>
    );
};
