import { appSlice } from '../slices/appSlice';
import { profileSlice } from '../slices/profileSlice';
import { api } from '../services/api';

export function AppReducer() {
    return {
        [api.reducerPath]: api.reducer,
        appSlice,
        profileSlice,
    };
}

export default AppReducer;
