import { useEffect, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux"

import { AppBody } from "@/components/layout/AppBody"
import { appCurrentUser } from "@/store/slices/appSlice"
import { TabHeader } from "@/components/TabHeader";
import { profileCurrentTab } from "@/store/slices/profileSlice";
import { useRequesthandler } from "@/hooks/useRequesthandler";
import { handleNavigationCheck } from '@/utils/helpers/routes';
import { FormGroup } from "@/components/FormGroup";

export const UserProfile = () => {

    const disatch = useDispatch();

    const currentUser = useSelector(appCurrentUser);
    const activeTab = useSelector(profileCurrentTab);

    useEffect(() => {
        handleNavigationCheck();
    }, []);

    const handleCreateFamily = async (e: any) => {
        if (!e) {
            return;
        }
        const data = new FormData(e.target);
        console.log('data: ', data);
        //await useRequesthandler('http://localhost:8081/', 'family/create', 'POST', {});
    };

    const formInputs = [
        {
            title: 'Brukernavn',
            name: 'username',
            type: 'text',
            attribute: 'username',
        },
        {
            title: 'Passord',
            name: 'password',
            type: 'password',
            attribute: 'current-password',
        },
        {
            title: 'E-post',
            name: 'email',
            type: 'email',
            attribute: 'email',
        },
    ];

    return ( 
        <div className="py-20">
            <form onClick={(e) => handleCreateFamily(e)}>
                {formInputs.map((input, key) => 
                    <FormGroup
                        data={input}
                        key={key}
                        inputOnChange={() => {}}
                    />
                )}
            </form>
        </div>
    )
}

export default UserProfile;