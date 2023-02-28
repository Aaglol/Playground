import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { useRouter } from "next/router";
import { ProfileHeader } from "@/components/layout/profile/ProfileHeader";

export const UserProfile = () => {

    const disatch = useDispatch();
    const router = useRouter();

    console.log('router', router.query);

    const currentUser = useSelector(appCurrentUser);

    
    return ( 
        <AppBody>
            <div className="container">
            <ProfileHeader page='Profil' />

            <hr />

            <div>
                
            </div>
            </div>
        </AppBody>
    )
}

export default UserProfile;