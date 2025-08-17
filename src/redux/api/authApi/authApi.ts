import { RegisterUserResponse, UserRegisterPayload } from '@/utility/type/userType';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
                headers.set('Accept', `*/*`);
            }
            return headers;
        },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        // registration user
        registerUser: builder.mutation<RegisterUserResponse, UserRegisterPayload>({
            query: (payload) => ({
                url: "/auth/register",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ['User'],
        }),









    }),
});

export const {
    useRegisterUserMutation,

} = authApi;

export default authApi;