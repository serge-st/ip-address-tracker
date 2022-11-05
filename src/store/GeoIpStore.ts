import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { IpService } from "../api/IpService";
import { RootStore } from "./store";

interface ILocation {
    country: string,
    region: string,
    city: string,
    lat: number,
    lng: number,
    postalCode: string,
    timezone: string,
    geonameId: number,
}

export interface IGeoIpData {
    ip: string;
    location: ILocation;
    domains: string[];
    isp: string;
}

export default class GeoIpStore {
    rootStore: RootStore;
    data: IGeoIpData | null = null;
    isLoading = false;
    error = '';

    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {rootStore: false}, {deep: true});
        this.rootStore = rootStore;
    }

    async getGeoIpData() {
        try {
            runInAction(() => {
                this.isLoading = true;
            })
            const {data} = await IpService.getDevData();
            runInAction(() => {
                this.data = data;
            })
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                runInAction(() => {
                    this.error = JSON.stringify(err, null, 2);
                })
            }
        } finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    }
}