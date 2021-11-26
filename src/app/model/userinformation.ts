import { User } from "./user";

export interface UserInformation {
    page: Number;
    per_page: Number;
    support: any;
    total: Number;
    total_pages: Number;
    data: User[];
}