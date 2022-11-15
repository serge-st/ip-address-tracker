import axios, { AxiosResponse } from "axios";
import { IGeoIpData } from "../store/GeoIpStore";

export type RequestParams = {
    ip: undefined | string,
    domain: undefined | string,
}
export class IpService {
    static async getGeoIpData({ip, domain}: RequestParams): Promise<AxiosResponse<IGeoIpData>> {
        return await axios.get<IGeoIpData>('/api/getIpData', {
            params: {
                ip,
                domain
            }
        });
    }

    static async getDevData({ip, domain}: RequestParams): Promise<AxiosResponse<IGeoIpData>> {
        return await axios.get<IGeoIpData>('/api/getIpDataDev', {
            params: {
                ip,
                domain
            }
        })
    }
}