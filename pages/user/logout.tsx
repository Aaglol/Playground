import { AppBody } from "@/components/layout/AppBody"
import { useEffect } from "react"
import { useLogoutMutation } from "@/store/services/user";

export const Logout = () => {

    const [logout] = useLogoutMutation();

    useEffect(() => {
        const handleLogout = async () => await logout().unwrap();
        handleLogout();
        window.location.href = "/";
    }, []);

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