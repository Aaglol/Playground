import { appSlice } from '../slices/appSlice';
import { profileSlice } from '../slices/profileSlice';
import { api } from '../services/api';

export function AppReducer(state = {}, action) {
    return {
        app: appSlice.reducer(state.app, action),
        profile: profileSlice.reducer(state.profile, action),
        [api.reducerPath]: api.reducer,
    };
}

export default AppReducer;
