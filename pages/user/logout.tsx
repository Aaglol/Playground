import { AppBody } from "@/components/layout/AppBody"
import { useEffect } from "react"
import { logOut } from "@/utils/helpers/auth";

export const Logout = () => {

    useEffect(() => {
        logOut();
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