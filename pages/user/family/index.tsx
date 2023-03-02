import { AppBody } from "@/components/layout/AppBody"
import { ListFamily } from "@/components/layout/family/ListFamily";
import { CreateFamily } from "@/components/layout/family/CreateFamily";

export const PAGE_USER_PROFILE = 'PAGE_FAMILY';

export const FamilyPage = () => {
    
    const familys = true;

    return ( 
        <AppBody page={PAGE_USER_PROFILE}>
            <div className="container with-border">
                {familys ? <ListFamily /> : <CreateFamily />}                
            </div>
        </AppBody>
    )
}

export default FamilyPage;