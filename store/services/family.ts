import { CommunicationApi } from './api';

export const familyApi = CommunicationApi.injectEndpoints({
    endpoints: (build) => ({
        familyList: build.query({
            query: () => '/family/list',
        }),
        familyDetails: build.query({
            query: () => '/family/details',
        }),
    }),
    overrideExisting: false,
});

export const {
    useFamilyListQuery,
    useFamilyDetailsQuery,
} = familyApi;

export const {
    endpoints: { familyList, familyDetails },
} = familyApi;