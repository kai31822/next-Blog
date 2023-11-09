'use client'
//radix-ui
import { TextField, Button, Callout, Text } from '@radix-ui/themes';
//MDE
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
//react-hook-form
import { useForm, Controller } from "react-hook-form";
//axios
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { zodResolver } from '@hookform/resolvers/zod';
import { createPostSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMassage';
import Spinner from '@/app/components/Spinner';
import { useSession } from "next-auth/react"

//
type PostForm = z.infer<typeof createPostSchema>;

const NewIssuePage = () => {
    const { data: session, status } = useSession()


    const route = useRouter()
    //resolver
    const { register, control, handleSubmit, formState: { errors } } = useForm<PostForm>({
        resolver: zodResolver(createPostSchema)
    })
    // console.log(register('title'));
    const [error, setError] = useState('');
    //spinner
    const [isSubmitting, setSubmitting] = useState(false);



    return (
        <div className='max-w-xl '>
            {error &&
                <Callout.Root color='red' className='mb-5'>
                    <Callout.Icon>
                    </Callout.Icon>
                    <Callout.Text>
                        {error}
                    </Callout.Text>
                </Callout.Root>}
            {/* form */}
            <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
                try {
                    setSubmitting(true)

                    await axios.post('/api/post/new', data);
                    route.push('/dashboard');
                } catch (error) {
                    setSubmitting(false)
                    setError('An unexpected error occurred.')
                }

            })}>
                <input type="text" value={session?.user.id} className='hidden' {...register('userid')} />
                {/* https://www.radix-ui.com/themes/docs/components/text-field */}
                <TextField.Root>
                    <TextField.Input placeholder="Title" {...register('title')} />
                </TextField.Root>
                {/*error  */}
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <Controller name='context' control={control} render={({ field }) => <SimpleMDE placeholder="context" {...field} />} />
                {/*error  */}
                <ErrorMessage>{errors.context?.message}</ErrorMessage>
                <Button disabled={isSubmitting}>Submit New Post {isSubmitting && <Spinner />}</Button>
            </form>
        </div>
    )


}
export default NewIssuePage
