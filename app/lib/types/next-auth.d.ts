import NextAuth from "next-auth/next";
import { Session, User } from 'next-auth'
import { JWT } from "next-auth/jwt";

type UserId = String

declare module 'next-auth/jwt' {
    interface JWT {
        id: UserId
        username?: string | null
    }
}


declare module 'next-auth' {
    interface Session {
        user: {
            username: string | null;
            image: string | null;
            id: UserId
            email: string | null,
            name: string | null,
            accessToken: string
        }
    }
}
