import axios, { AxiosResponse } from "axios";
import { IGeoIpData } from "../store/GeoIpStore";

export class IpService {
    static async getGeoIpData(): Promise<AxiosResponse<IGeoIpData>> {
        return await axios.get<IGeoIpData>('/getIpData');
    }

    static async getDevData(): Promise<AxiosResponse<IGeoIpData>> {
        return await axios.get<IGeoIpData>('/getIpDataDev')
    }
}