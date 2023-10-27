//zod: https://www.npmjs.com/package/zod
import { z } from 'zod';

// createIssue
export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255),
    description: z.string().min(1, 'Title is required.').max(255)
});

//login
export const loginSchema = z.object({
    name: z.string().min(1, 'Username is required.').max(25),
    password: z.string().min(8).max(25)
})

//createUser
export const createUserSchema = z.object({
    email: z.string().min(8),
    name: z.string().min(1, 'Username is required.').max(25),
    password: z.string().min(8).max(25)
})
