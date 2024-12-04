import axios, { AxiosInstance } from "axios";
import { UserService } from "./userServices";

export class ApiClient {
    private readonly axiosInstance : AxiosInstance;
    public readonly userService : UserService;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "http://localhost:5092/",
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });

        this.userService = new UserService(this.axiosInstance);
    }
}