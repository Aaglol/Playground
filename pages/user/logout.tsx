import { AppBody } from "@/components/layout/AppBody"
import { useEffect } from "react"
import { useLogoutMutation } from "@/store/services/user";
import { useSelector } from "react-redux";
import { appCurrentUser } from "@/store/slices/appSlice";

export const Logout = () => {

    const user = useSelector(appCurrentUser);
    const [logout] = useLogoutMutation();

    useEffect(() => {
        const handleLogout = async () => await logout({id: user.id}).unwrap();
        handleLogout();
        window.location.href = "/";
    }, [logout, user.id]);

    return ( 
        <AppBody>
            <div className="container">
                <div className="container-title">
                    Logger ut..
                </div>
            </div>
        </AppBody>
    )
}

export default Logout;