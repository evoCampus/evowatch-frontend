import { AddUserDTO, UserApi, UserDTO } from "../api";
import { AxiosInstance } from "axios";

export class UserService {
    private readonly userApi : UserApi;

    constructor(axiosInstance : AxiosInstance) {
        this.userApi = new UserApi(undefined, undefined, axiosInstance);
    }

    async addUser(user:AddUserDTO) : Promise<UserDTO> {
        const { data } = await this.userApi.addUser(user);
        return data;
    }
}