import React from 'react'
import Link from 'next/link'
import UserAuthForm from './UserAuthForm'

const SignIn = () => {
    return (
        <div className='container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <div className='mx-auto'>Icon</div>
            </div>
            {/* sign in form */}
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-zinc-700'>New to Blog?
                <Link href='/sing-up' className='hover:text-zinc-800 text-sm underline underline-offset-4'>Sign Up</Link>
            </p>
        </div>
    )
}

export default SignIn
