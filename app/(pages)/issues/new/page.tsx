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
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMassage';
import Spinner from '@/app/components/Spinner';
//
type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
    const route = useRouter()
    //resolver
    const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
        resolver: zodResolver(createIssueSchema)
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
                    await axios.post('/api/issues', data);
                    route.push('/issues');
                } catch (error) {
                    setSubmitting(false)
                    setError('An unexpected error occurred.')
                }

            })}>
                {/* https://www.radix-ui.com/themes/docs/components/text-field */}
                <TextField.Root>
                    <TextField.Slot>

                    </TextField.Slot>
                    <TextField.Input placeholder="Title" {...register('title')} />
                </TextField.Root>
                {/*error  */}
                <ErrorMessage>{errors.title?.message}</ErrorMessage>
                <Controller name='description' control={control} render={({ field }) => <SimpleMDE placeholder="Description" {...field} />} />
                {/*error  */}
                <ErrorMessage>{errors.description?.message}</ErrorMessage>
                <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Spinner />}</Button>
            </form>
        </div>
    )
}

export default NewIssuePage
