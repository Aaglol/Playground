import { AppBody } from "@/components/layout/AppBody"

export const PAGE_USER_PROFILE = 'PAGE_USER_PROFILE';

export const UserProfile = () => {

    return ( 
        <AppBody page={PAGE_USER_PROFILE}>
            <div className="container">
                <div>
                    Hello
                </div>
            </div>
        </AppBody>
    )
}

export default UserProfile;