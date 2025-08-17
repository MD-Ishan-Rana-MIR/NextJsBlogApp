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