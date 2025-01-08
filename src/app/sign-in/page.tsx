import { SignInWithGoogle } from '@/lib/auth';

export default function page() {
   

    return (
        <div>
            <form action={SignInWithGoogle}>
                <button type='submit'>Signin with google</button>
            </form>
        </div>
    );
}
