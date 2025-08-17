// user registration 


export interface UserRegisterPayload {
    name: string;
    email: string;
    password: string;
}

interface UserType {
    id: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

export interface RegisterUserResponse {
    status: string;
    msg: string;
    data: UserType

}



// user login export interface UserLoginPayload {


export interface UserLoginPayload {
    email: string;
    password: string;
}

export interface UserLoginResponse {
    status: string;
    msg: string;
    token: string;
    data: {
        id: string;
        email: UserType;
        name: string;
        role: string;
        lastLogin: string;
        loginDeviceName: string
    };
}


// email verify api 


export interface EmailVerifyPayload {
    email: string;
}

export interface EmailVerifyResponse {
    status: string;
    msg: string;
}



// otp verify api 

export interface OtpVerifyPayload {
    otp: string;
    email: string;
}

export interface OtpVerifyResponse {
    status: string;
    msg: string;
    otpVerify : boolean;
}


// new password set api 


export interface NewPasswordPayload {
    password: string;
}

export interface NewPasswordResponse {
    status: string;
    msg: string;
}