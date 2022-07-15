import { axiosInstance } from "../AxiosInstance";

export async function requestCode(codeRequest) {
    const response = await axiosInstance.post('generate-code', codeRequest);
    return response;
}

export async function passwordlessLogin(loginRequest) {
    const response = await axiosInstance.post('passwordless-login', loginRequest);
    return response;
}