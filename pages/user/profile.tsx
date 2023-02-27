import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { TabHeader } from "@/components/TabHeader";
import { handleNavigationCheck } from '@/utils/helpers/routes';

export const PAGE_USER_PROFILE = 'PAGE_USER_PROFILE';

export const UserProfile = () => {

    const disatch = useDispatch();

    const currentUser = useSelector(appCurrentUser);

    useEffect(() => {
        handleNavigationCheck();
    }, []);

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
                <div className="container-title">
                    {currentUser.username}
                </div>
                <div className="mt-20 py-20">
                    <div className="flex justify-content-center">
                        <TabHeader
                            items={profileTabs}
                        />
                    </div>
                </div>
            </div>
        </AppBody>
    )
}

export default UserProfile;