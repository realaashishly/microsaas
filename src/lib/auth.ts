'use server';
import { auth, signIn, signOut } from '@/auth';
import { redirect } from 'next/navigation';

export async function SignInWithGoogle() {
    const session = await auth();

    if (session?.user) redirect('/dashboard');

    await signIn('google', { redirectTo: '/dashboard' });
}

export async function SignOut() {
    await signOut();
}
