import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { TabHeader } from "@/components/TabHeader";
import { profileCurrentTabUpdated, profileCurrentTab } from "@/store/slices/profileSlice";

export const UserIndex = () => {

    const disatch = useDispatch();

    const currentUser = useSelector(appCurrentUser);
    const activeTab = useSelector(profileCurrentTab);

    useEffect(() => {
        return () => {
            handleChangeProfileTab(0);
        }
    }, []);

    const handleChangeProfileTab = (id: number) => {
        disatch(profileCurrentTabUpdated(id));
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
                <div className="mt-20 flex justify-content-center py-20">
                    <TabHeader
                        items={profileTabs}
                        handleOnClick={handleChangeProfileTab}
                        isActive={activeTab}
                    />
                </div>
            </div>
        </AppBody>
    )
}

export default UserIndex;