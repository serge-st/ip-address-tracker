import { makeAutoObservable } from "mobx";
import { ChangeEvent } from "react";
import validator from 'validator';
import { RootStore } from "./store";

export enum SearchType {
    Empty = 'Empty',
    Domain = 'Domain',
    Ip = 'Ip',
}

export default class SearchStore {
    rootStore: RootStore;
    value: string = '';
    isAllowed: boolean = true;
    type: SearchType = SearchType.Empty;

    constructor(rootStore: RootStore) {
        makeAutoObservable(this, {rootStore: false});
        this.rootStore = rootStore;
    }

    handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        this.value = (e.target.value);
        this.validateData(e.target.value);
    }

    validateData(str: any) {
        if (validator.isIP(str, 4) || validator.isIP(str, 6)) {
            this.isAllowed = true;
            this.type = SearchType.Ip
        } else if (validator.isFQDN(str)) {
            this.isAllowed = true;
            this.type = SearchType.Domain;
        } else if (str === '') {
            this.isAllowed = true;
            this.type = SearchType.Empty;
        } else {
            this.isAllowed = false;
        }
    }
}