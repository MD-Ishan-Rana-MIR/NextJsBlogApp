import { EmailVerifyPayload, EmailVerifyResponse, NewPasswordPayload, NewPasswordResponse, OtpVerifyPayload, OtpVerifyResponse, RegisterUserResponse, UserLoginPayload, UserLoginResponse, UserRegisterPayload } from '@/utility/type/userType';
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

        // login user 

        loginUser: builder.mutation<UserLoginResponse, UserLoginPayload>({
            query: (payload) => ({
                url: "/auth/login",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ['User'],
        }),


        // email verify 

        emailVerify: builder.mutation<EmailVerifyResponse, EmailVerifyPayload>({
            query: (payload) => ({
                url: "/forget/send-otp",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ['User'],
        }),


        // otp verify 

        otpVerify: builder.mutation<OtpVerifyResponse, OtpVerifyPayload>({
            query: (payload) => ({
                url: "/forget/verify-otp",
                method: "POST",
                body: payload,
            })
        }),

        // password reset 


        newPassword: builder.mutation<NewPasswordResponse, NewPasswordPayload>({
            query: (payload) => ({
                url: "/forget/reset-password",
                method: "POST",
                body: payload,
            }),
            invalidatesTags: ['User'],
        }),





    }),
});

export const {
    useRegisterUserMutation,
    useLoginUserMutation,
    useEmailVerifyMutation,
    useOtpVerifyMutation,
    useNewPasswordMutation,

} = authApi;

export default authApi;