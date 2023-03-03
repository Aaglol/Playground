import { AppBody } from "@/components/layout/AppBody"
import { ListFamily } from "@/components/layout/family/ListFamily";
import { CreateFamily } from "@/components/layout/family/CreateFamily";
import { useSelector } from "react-redux";
import { storeAvaiableFamilys, storeSelectedFamily, storeFamilyIsLoading } from "@/store/slices/familySlice";
import { useFamilyListQuery } from "@/store/services/family";
import { Loader } from "@/components/Loader";

export const PAGE_USER_PROFILE = 'PAGE_FAMILY';

export const FamilyPage = () => {
    
    const familys = useSelector(storeAvaiableFamilys);
    const selectedFamily = useSelector(storeSelectedFamily);
    const { isLoading } = useFamilyListQuery(undefined, {
        refetchOnMountOrArgChange: true,
        skip: false,
    });

    if (isLoading) {
        return <Loader />;
    }

    return ( 
        <AppBody page={PAGE_USER_PROFILE}>
            <div className="container with-border">
                <div className="container-title flex">
                    <div><strong>{selectedFamily.name === '' ? 'Familie' : selectedFamily.nam}</strong></div>
                    {selectedFamily.name === '' ? (
                        <div className="ml-auto">Legg til</div>
                    ) : (
                        <div className="ml-auto">Oversikt</div>
                    )}
                </div>

                <hr className="mb-20" />
                
                {familys ? <ListFamily /> : <CreateFamily />}                
            </div>
        </AppBody>
    )
}

export default FamilyPage;