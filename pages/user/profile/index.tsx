import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { TabHeader } from "@/components/TabHeader";
import { ProfileHeader } from "@/components/layout/profile/ProfileHeader";

export const PAGE_USER_PROFILE = 'PAGE_USER_PROFILE';

export const UserProfile = () => {

    const disatch = useDispatch();

    const currentUser = useSelector(appCurrentUser);

    const profileTabs = [
        {
            title: 'Oversikt',
            href: '/user'
        },
        {
            title: 'Familie',
            href: '/user/family'
        },
        {
            title: 'Innstillinger',
            href: '/user/settings'
        },
    ];

    return ( 
        <AppBody page={PAGE_USER_PROFILE}>
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