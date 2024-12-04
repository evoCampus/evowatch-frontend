import { AddUserDTO, ModifyUserDTO, UserApi } from "../api";
import axios, { AxiosInstance } from "axios";

export class UserService {
    private readonly userApi : UserApi;

    constructor(axiosInstance : AxiosInstance) {
        this.userApi = new UserApi(undefined, undefined, axiosInstance);
    }

    addUser = async (user : AddUserDTO) : Promise<void> => {
        const { data } = await this.userApi.addUser(user);
        return data;
    }
}