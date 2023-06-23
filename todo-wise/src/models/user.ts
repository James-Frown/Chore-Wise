export interface User {
    user_id: string,
    first_name: string,
    last_name: string,
    user_email: string,
    user_password: string,
}

export interface UserResponse {
    results: User[],
}