import axios from "axios";
import { makeAutoObservable, runInAction } from "mobx";
import { IpService, RequestParams } from "../api/IpService";
import { SearchType } from "./SearchStore";
import store, { RootStore } from "./store";

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
    params: RequestParams = {
        ip: undefined,
        domain: undefined,
    }

    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {rootStore: false}, {deep: true});
        this.rootStore = rootStore;
    }

    newDataLookup() {
        this.getGeoIpData();
    }

    async getGeoIpData() {
        try {
            runInAction(() => {
                this.isLoading = true;
            })

            switch (store.searchStore.type) {
                case SearchType.Ip:
                    runInAction(() => {
                        this.params = {
                            domain: undefined,
                            ip: store.searchStore.value,
                        }
                    })
                    break;
                case SearchType.Domain:
                    runInAction(() => {
                        this.params = {
                            ip: undefined,
                            domain: store.searchStore.value,
                        }
                    })
                    break;
                case SearchType.Empty:
                    runInAction(() => {
                        this.params = {
                            ip: undefined,
                            domain: undefined,
                        }
                    })
                    break;
                default:
                    runInAction(() => {
                        this.params = {
                            ip: undefined,
                            domain: undefined,
                        }
                    })
                    break;
            }

            const {data} = await IpService.getDevData(this.params);

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