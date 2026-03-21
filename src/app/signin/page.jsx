"use client";
import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import React, { useState } from 'react';
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import Link from 'next/link';


export default function Page() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const callbackUrl = searchParams?.get('callbackUrl') || '/';

    const handleSignin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const password = e.target.password.value;

        if (!email || !password) {
            toast.error('Please enter email and password.');
            return;
        }

        setIsSubmitting(true);
        try {
            const resp = await signIn("credentials", {
                email,
                password,
                redirect: false,
                callbackUrl,
            });

            if (!resp?.ok) {
                toast.error('Invalid email or password.');
                return;
            }

            toast.success('Signed in successfully.');
            router.push(resp.url || '/');
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleSocialSignUp = async (provider) => {
        const resp = await signIn(provider, { redirect: false, callbackUrl });

        if (resp?.ok && resp?.url) {
            router.push(resp.url);
            return;
        }

        if (resp?.error) {
            toast.error('Social sign in failed. Please try again.');
        }
    }
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4 pt-24 md:pt-32 pb-10 md:pb-20">       

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-6">
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    <form onSubmit={handleSignin}>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />

                        <label className="label mt-2">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" required />

                        <button type='submit' className="btn btn-neutral mt-4 w-full" disabled={isSubmitting}>
                            {isSubmitting ? 'Signing In...' : 'Sign In'}
                        </button>
                        <p className='text-gray-500 text-center my-2'>or</p>

                    </form>
                    <button onClick={() => handleSocialSignUp("google")} className="btn btn-default  w-full">Continue with Google</button>


                    <p>Don&apos;t have an account? <Link href="/signup" className="text-primary">Sign up</Link></p>
                    <p>Don&apos;t Demo account? demo@pawstore.com </p>
                    <p>Don&apos;t Demo Password: Demo123</p>
                </fieldset>
            </main>

            <Footer />
        </div>
    )
}
