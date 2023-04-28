import { AppBody } from "@/components/layout/AppBody"
import { useSelector } from "react-redux";
import { appIsLoggedIn } from "@/store/slices/appSlice";
import { useState } from "react";
import Login, { PAGE_LOGIN } from "./Login";
import Register, { PAGE_REGISTER } from "./Register";

export const PAGE_USER_PROFILE = 'PAGE_USER_PROFILE';

export const UserProfile = () => {
    const [showLogin, setShowLogin] = useState(true);
    const isLoggedIn = useSelector(appIsLoggedIn);

    const handleChangeView = () => setShowLogin(!showLogin); 

    if (!isLoggedIn) {
        return (
            <AppBody page={showLogin ? PAGE_LOGIN : PAGE_REGISTER}>
                <div className="container">
                    <div className="flex mx-auto mb-20">
                        <div
                            onClick={handleChangeView}
                            className={showLogin ? 'disabled mr-20' : 'mr-20'}
                        >
                            Logg inn
                        </div>
                        <div
                            onClick={handleChangeView}
                            className={!showLogin ? 'disabled' : ''}
                        >
                            Registrer
                        </div>
                    </div>
                    {showLogin ? <Login /> : <Register />}
                </div>
            </AppBody>
        );
    }

    return ( 
        <AppBody page={PAGE_USER_PROFILE}>
            <div className="container">
                <div>
                    Hello
                </div>
            </div>
        </AppBody>
    )
}

export default UserProfile;