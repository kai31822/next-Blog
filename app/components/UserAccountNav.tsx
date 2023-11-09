import { FC } from "react";
import UserAvatar from "./UserAvatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { Session } from "inspector";
interface UserAccountNavProps {
    user: Pick<User, 'name' | 'image' | 'email'>
}
const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
    return <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar user={user}></UserAvatar>
        </DropdownMenuTrigger>
    </DropdownMenu>
}
export default UserAccountNav
