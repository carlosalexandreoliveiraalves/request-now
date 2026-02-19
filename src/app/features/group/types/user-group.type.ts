import { UserInterface } from "../../user/types/user.type";
import { GroupInterface } from "./group.type";
import { Role } from "./role.type";

export interface UserGroupInterface {
    fk_user: string;
    fk_group: string;

    role: Role;
    confirmed_at?: string | Date | null;
    User?: UserInterface;
    Group?: GroupInterface;
}