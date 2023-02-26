import { UserProfile } from "./profile";
import { useEffect } from "react";
import Router from "next/router";
import { handleNavigationCheck } from '@/utils/helpers/routes';
import store from '@/store/index';

export async function getStaticProps() {

    const state = store.getState();
    
    return {
        props: {},
    }
}

export const UserIndex = () => {

    useEffect(() => {
        if (!handleNavigationCheck()) {
            return;    
        }
        Router.push('/user/profile');
    }, []);

    return <UserProfile />;
}

export default UserIndex;