import GeoIpStore from "./GeoIpStore";
import SearchStore from "./SearchStore";

export class RootStore {
    searchStore;
    geoIpStore;

    constructor() {
        this.searchStore = new SearchStore(this);
        this.geoIpStore = new GeoIpStore(this)
    }
}

const store = new RootStore()
export default store;