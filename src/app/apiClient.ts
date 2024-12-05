import axios, { AxiosInstance } from "axios";
import { UserService } from "./userServices";

export class ApiClient {
    private readonly axiosInstance : AxiosInstance;
    public readonly userService : UserService;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "/api",
            withCredentials: true
        });

        this.userService = new UserService(this.axiosInstance);
    }
}