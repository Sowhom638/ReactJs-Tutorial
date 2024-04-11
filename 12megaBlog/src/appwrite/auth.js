import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite"

class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return await this.login({ email, password });
            } else {
                return userAccount;
            }

        } catch (error) {
            return error;
        }

    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            return error;
        }
    }
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            return error;
        }

    }
    async logOut() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            return error;
        }

    }



}

const authService = new AuthService();

export default authService;