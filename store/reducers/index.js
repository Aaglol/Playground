import { appSlice } from '../slices/appSlice';

export function AppReducer(state = {}, action) {
    return {
        app: appSlice.reducer(state.app, action),
    };
}

export default AppReducer;
