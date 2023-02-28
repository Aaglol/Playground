import { TabHeader } from "@/components/TabHeader"
import { profileCurrentTab } from "@/store/slices/profileSlice";
import { appCurrentUser } from "@/store/slices/appSlice";
import { useSelector } from "react-redux";

export const ProfileHeader = ({page}: string) => {

    const currentUser = useSelector(appCurrentUser);
    const activeTab = useSelector(profileCurrentTab);

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
        <div className="container-title flex w-100">
            {currentUser.username} - {page}
            <TabHeader
                items={profileTabs}
                isActive={activeTab}
            />
        </div>
    )
}