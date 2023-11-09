import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu"
import { Session } from "inspector";
interface UserAvatarProps {
    user: Pick<User, 'name' | 'image' | 'email'>
}
const UserAvatar: FC<UserAvatarProps> = ({ user }) => {
    return <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}
export default UserAvatar
