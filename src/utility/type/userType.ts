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