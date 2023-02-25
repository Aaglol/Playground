import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { TabHeader } from "@/components/TabHeader";
import { profileCurrentTabUpdated, profileCurrentTab } from "@/store/slices/profileSlice";
import { Button } from "@/components/Button";
import { useRequesthandler } from "@/hooks/useRequesthandler";
import { handleNavigationCheck } from '@/utils/helpers/routes';

export const UserProfile = () => {

    const disatch = useDispatch();

    const currentUser = useSelector(appCurrentUser);
    const activeTab = useSelector(profileCurrentTab);

    useEffect(() => {
        handleNavigationCheck();
        return () => {
            handleChangeProfileTab(0);
        }
    }, []);

    const handleChangeProfileTab = (id: number) => {
        disatch(profileCurrentTabUpdated(id));
    };

    const handleCreateFamily = async() => {
        await useRequesthandler('http://localhost:8081/', 'family/create', 'POST', {});
    };

    const handleCreateFamilyMember = async() => {
        await useRequesthandler('http://localhost:8081/', 'family/member/create', 'POST', {});
    };

    const profileTabs = [
        {
            title: 'Oversikt',
            id: 0,
        },
        {
            title: 'Innstillinger',
            id: 1,
        },
        {
            title: 'Koblinger',
            id: 2,
        },
    ];

    return ( 
        <AppBody>
            <div className="container">
                <div className="container-title">
                    {currentUser.username}
                </div>
                <div className="mt-20 py-20">
                    <div className="flex justify-content-center">
                        <TabHeader
                            items={profileTabs}
                            handleOnClick={handleChangeProfileTab}
                            isActive={activeTab}
                        />
                    </div>
                </div>
            </div>
        </AppBody>
    )
}

export default UserProfile;