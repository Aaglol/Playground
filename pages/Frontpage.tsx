import { AppBody } from '@/components/layout/AppBody';

export const PAGE_FRONTPAGE = 'PAGE_FRONTPAGE';

export function Frontpage() {

    return (
        <AppBody page={PAGE_FRONTPAGE}>
            <div className="container"> 
                <div className="container-title">
                    Kul innholdsrik tittel
                </div>
                <div className="mt-20 text-center">
                    Etterfulgt av noen smarte ord
                </div>
            </div>
        </AppBody>
    );
};

export default Frontpage;
