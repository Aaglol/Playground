import { AppBody } from "@/components/layout/AppBody"
import { ListFamily } from "@/components/layout/family/ListFamily";
import { CreateFamily } from "@/components/layout/family/CreateFamily";
import { useSelector } from "react-redux";
import { storeAvaiableFamilys, storeSelectedFamily } from "@/store/slices/familySlice";
import { useFamilyListQuery } from "@/store/services/family";
import { Loader } from "@/components/Loader";
import { useEffect } from "react";

export const PAGE_USER_PROFILE = 'PAGE_FAMILY';

export const FamilyPage = () => {
    
    const { isLoading, isFetching, error, refetch} = useFamilyListQuery({
        refetchOnMountOrArgChange: 5,
        skip: false
    });

    useEffect(() => {
        if (!isLoading && !isFetching) {
            refetch();
        }
    }, []);
    
    const familys = useSelector(storeAvaiableFamilys);
    const selectedFamily = useSelector(storeSelectedFamily);

    if (!isLoading || isFetching) {
        return <Loader />;
    }

    if (error) {
        console.warn('errrooorrr', error);
    }

    return ( 
        <AppBody page={PAGE_USER_PROFILE}>
            <div className="container with-border">
                <div className="container-title flex">
                    <div><strong>{selectedFamily.name ?? 'Familie'}</strong></div>
                    {selectedFamily.name === '' ? (
                        <div className="ml-auto">Legg til</div>
                    ) : (
                        <div className="ml-auto">Oversikt</div>
                    )}
                </div>

                <hr />
                
                {familys ? <ListFamily /> : <CreateFamily />}                
            </div>
        </AppBody>
    )
}

export default FamilyPage;