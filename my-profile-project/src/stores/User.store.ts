import {defineStore} from "pinia";

interface IUserStore {
    uid: string;
    name: string;
    email: string;
    password: string;
    token: string;
    comments: []
}


export const UserStore = defineStore('useUserStore', {
})