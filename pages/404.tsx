import { AppBody } from '@/components/layout/AppBody';

export const PAGE_NOT_FOUND = 'PAGE_NOT_FOUND';

export default function NotFound() {

    return (
        <AppBody page={PAGE_NOT_FOUND}>
            <div className="container">
                <div className="container-title">
                    Fant ikke siden.
                </div> 
            </div>
        </AppBody>
    );
};
