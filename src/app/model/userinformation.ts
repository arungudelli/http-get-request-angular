import { User } from "./user";

export interface UserInformation {
    page: Number;
    per_page: Number;
    total: Number;
    total_pages: Number;
    data: User[];
}