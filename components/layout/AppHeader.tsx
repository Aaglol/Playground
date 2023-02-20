import { useSelector } from 'react-redux';

import { appIsLoggedIn } from '@/store/slices/appSlice';
import { Button } from '../Button';

export const AppHeader = () => {
    
    const loggedIn = useSelector(appIsLoggedIn);

    const handleOpenLogin = () => {

    };

    return (
        <div className="appHeader">
            <div className="rightHeader">

            </div>
            <div className="leftHeader">
                {loggedIn ? (
                    <div>
                        Hei bruker!
                    </div>
                ) : (
                    <div>
                        <Button
                            title="Logg inn"
                            onClick={handleOpenLogin}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}