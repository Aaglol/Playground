import { AppBody } from '@/components/layout/AppBody';

export const PAGE_ABOUT = 'PAGE_ABOUT';

export default function About() {

    return (
        <AppBody page={PAGE_ABOUT}>
            <div className="container">
                <div className="container-title">
                    Om Playground
                </div> 
                <div className="mt-20 text-center">
                        <h3>Fase 1:</h3>
                        <br />
                        <h4>Familie støtte.</h4>
                        <ul className="mt-20" style={{listStyle: 'none'}}>
                            <li>Opprett / Rediger / Slett en familie</li>
                            <br />
                            <li>Familiemedlemer - max 5</li>
                            <br />
                            <li>Dagbok, daglige oppgaver, kalender</li>
                        </ul>
                </div>
            </div>
        </AppBody>
    );
};
