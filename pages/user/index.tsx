import { AppBody } from "@/components/layout/AppBody"
import { useSelector, useDispatch } from "react-redux"
import { appCurrentUser } from "@/store/slices/appSlice"
import { TabHeader } from "@/components/TabHeader";
import { profileCurrentTabUpdated, profileCurrentTab } from "@/store/slices/profileSlice";
import { useEffect, useState } from "react";

export const UserIndex = () => {

    const disatch = useDispatch();

    const currentUser = useSelector(appCurrentUser);
    const activeTab = useSelector(profileCurrentTab)
    console.log('currentUser', currentUser);

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
    ];

    return ( 
        <AppBody>
            <div className="container">
                <div className="container-title">
                    {currentUser.username} . dsad
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