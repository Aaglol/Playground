import { AppBody } from "@/components/layout/AppBody"

export const PAGE_USER_SETTINGS = 'PAGE_USER_SETTINGS';

export const UserProfile = () => {

    return ( 
        <AppBody page={PAGE_USER_SETTINGS}>
            <div className="container">
                <div>
                    Innstillinger
                </div>
            </div>
        </AppBody>
    )
}

export default UserProfile;