import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { TabHeader } from "@/components/TabHeader";
import { profileCurrentTabUpdated, profileCurrentTab } from "@/store/slices/profileSlice";
import { ProfileHeader } from "@/components/layout/profile/ProfileHeader";

export const PAGE_USER_PROFILE = 'PAGE_FAMILY';

export const FamilyPage = () => {

    const disatch = useDispatch();

    useEffect(() => {
        return () => {
            disatch(profileCurrentTabUpdated(0));
        }
    }, []);

    return ( 
        <AppBody page={PAGE_USER_PROFILE}>
            <div className="container">
                <ProfileHeader page='Familie' />

                <hr />
                
                <div className="mt-20">
                    Din familie
                </div>
            </div>
        </AppBody>
    )
}

export default FamilyPage;