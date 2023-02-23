import { store } from "@/store";
import { userSessionCheck, userLogOut, isLoggedInUpdated } from "@/store/slices/appSlice";

export async function checkIfLoggedIn() {
    await store.dispatch(userSessionCheck());
}

export async function logOut() {
    await store.dispatch(userLogOut());
    await store.dispatch(isLoggedInUpdated(false));
}