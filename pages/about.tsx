import { AppBody } from '@/components/layout/AppBody';

export const PAGE_ABOUT = 'PAGE_ABOUT';

export default function About() {

    return (
        <AppBody page={PAGE_ABOUT}>
            <div className="container">
                <div className="container-title">
                    Om meg
                </div>
                <div className="container">
                    29år gammel. 
                    <br />
                    Utvikler i form av web, apper og spill
                </div>
            </div>
        </AppBody>
    );
};
