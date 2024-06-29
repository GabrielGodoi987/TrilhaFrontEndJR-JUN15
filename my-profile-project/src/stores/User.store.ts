import {defineStore} from "pinia";
import type {UserModel} from "@/models/UserModel/user.model";
import {AuthUserService} from "@/service/UserModule/userLogin/UserLogin";

const {loginUser, createUser} = new AuthUserService();

interface IUserStore {
    user: UserModel;
}

export const useUserStore = defineStore('useUserStore', {
    state: (): IUserStore => ({
        user: {
            uid: '',
            name: '',
            email: '',
            password: '',
            role: 'User',
            createdAt: new Date()
        }
    }),

    actions: {
        CREATE_NEWUSER(): void {
            const data = createUser(this.user);
            if (!!data) {
                console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
            }
        },

        LOGIN_USER() {
            return loginUser(this.user);
        }
    }
})