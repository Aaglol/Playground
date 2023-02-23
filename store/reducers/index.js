import { appSlice } from '../slices/appSlice';
import { profileSlice } from '../slices/profileSlice';

export function AppReducer(state = {}, action) {
    return {
        app: appSlice.reducer(state.app, action),
        profile: profileSlice.reducer(state.profile, action),
    };
}

export default AppReducer;
