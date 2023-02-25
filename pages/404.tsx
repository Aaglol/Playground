import { AppBody } from '@/components/layout/AppBody';

export default function NotFound() {

    return (
        <AppBody page='Forside'>
            <div className="container">
                <div className="container-title">
                    Fant ikke siden.
                </div> 
            </div>
        </AppBody>
    );
};
