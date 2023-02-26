import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { useRouter } from "next/router";

export const UserProfile = () => {

    const disatch = useDispatch();
    const router = useRouter();

    console.log('router', router.query);

    const currentUser = useSelector(appCurrentUser);

    
    return ( 
        <AppBody>
            <div className="container">
                <div className="container-title text-left">
                    {currentUser.username}
                </div>
                <div className="mt-20 py-20">
                    Hello
                </div>
            </div>
        </AppBody>
    )
}

export default UserProfile;