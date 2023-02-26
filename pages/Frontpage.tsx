import { AppBody } from '@/components/layout/AppBody';

export const PAGE_FRONTPAGE = 'PAGE_FRONTPAGE';

export default function Frontpage() {

    return (
        <AppBody page={PAGE_FRONTPAGE}>
            <div className="container"> 
                <div className="container-title">
                    Playground
                </div>
                <div className="mt-20 text-center">
                    En forside historie
                </div>
            </div>
        </AppBody>
    );
};
