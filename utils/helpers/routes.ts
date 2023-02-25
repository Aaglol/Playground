import router from 'next/router';
import { store } from '@/store';

export function handleNavigationCheck() {
    if (typeof window === undefined) {
        return;
    }

    const state = store.getState();
    const currentUrl = window.location.pathname.split('/');
    const isLoggedIn = state.app.isLoggedIn;

    if (currentUrl.includes('user') && !isLoggedIn) {
        return router.push('/404');
    }

    console.log('currentUrl', currentUrl, ' isLoggedIn: ', isLoggedIn);
    return true;
    
}