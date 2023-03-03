import { TabHeader } from "@/components/TabHeader"
import { profileCurrentTab } from "@/store/slices/profileSlice";
import { appCurrentUser } from "@/store/slices/appSlice";
import { useSelector } from "react-redux";

export const ProfileHeader = ({page}: string) => {

    const currentUser = useSelector(appCurrentUser); 
    
    return (
        <div className="container-title flex w-100">
            {currentUser.username} - {page}
        </div>
    )
}