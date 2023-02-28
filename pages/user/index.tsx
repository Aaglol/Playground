import { useEffect } from "react";
import Router from "next/router";
import store from '@/store/index';
import { UserProfile } from "./profile";

export async function getStaticProps() {

    const state = store.getState();
    
    return {
        props: {},
    }
}

export const UserIndex = () => {

    useEffect(() => {
        Router.push('/user/profile');
    }, []);

    return <UserProfile />;
}

export default UserIndex;