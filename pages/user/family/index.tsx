import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { TabHeader } from "@/components/TabHeader";
import { profileCurrentTabUpdated, profileCurrentTab } from "@/store/slices/profileSlice";

import { useRequesthandler } from "@/hooks/useRequesthandler";
import { handleNavigationCheck } from '@/utils/helpers/routes';

export const PAGE_USER_PROFILE = 'PAGE_FAMILY';

export const FamilyPage = () => {

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
            href: '/user'
        },
        {
            title: 'Familie',
            id: 1,
            href: '/user/family'
        },
        {
            title: 'Innstillinger',
            id: 2,
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
                            isActive={activeTab}
                        />
                    </div>
                </div>
            </div>
        </AppBody>
    )
}

export default FamilyPage;