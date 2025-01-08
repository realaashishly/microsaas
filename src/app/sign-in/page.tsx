'use client';
import { SignInWithGoogle } from '@/lib/auth';
import { Loader } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function page() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return (
            <div className='w-screen h-screen flex flex-col space-y-4 items-center justify-center'>
                <span className='animate-spin'>
                    <Loader />
                </span>
                <p className='text-zinc-700'>Setting up your account</p>
            </div>
        );
    }

    if (status === 'authenticated') redirect('/dashboard');

    return (
        <div>
            <form action={SignInWithGoogle}>
                <button type='submit'>Signin with google</button>
            </form>
        </div>
    );
}
