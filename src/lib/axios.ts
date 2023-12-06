import { URL_API } from "@/config";
import axios from "axios";

export const axios_api = axios.create({
    baseURL: URL_API,
    timeout: 1000,
    withCredentials: true,
});