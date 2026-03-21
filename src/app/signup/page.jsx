"use client";
import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Page() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSignUp = async (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const password = e.target.password.value;

        if (!name || !email || !password) {
            toast.error('Please fill in all required fields.');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters.');
            return;
        }

        const newUser = {
            name,
            email,
            password,
        };

        setIsSubmitting(true);
        try {
            const resp = await fetch('/signup/api', {
                method: 'POST',
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await resp.json();

            if (!resp.ok) {
                toast.error(data?.message || 'Signup failed. Please try again.');
                return;
            }

            e.target.reset();
            toast.success('Account created successfully. Please sign in.');
            router.push('/signin');
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    }

    const handleSocialSignUp = async (provider) => {
        const resp = await signIn(provider, { redirect: false, callbackUrl: '/' });

        if (resp?.ok && resp?.url) {
            router.push(resp.url);
            return;
        }

        if (resp?.error) {
            toast.error('Social sign up failed. Please try again.');
        }
    }
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4 pt-24 md:pt-32 pb-10 md:pb-20">

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm border p-6">
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSignUp}>
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Name" required />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />

                        <label className="label mt-2">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" minLength={6} required />

                        <button type='submit' className="btn btn-neutral mt-4 w-full" disabled={isSubmitting}>
                            {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                        </button>
                        <p className='text-gray-500 text-center my-2'>or</p>

                    </form>
                    <button onClick={() => handleSocialSignUp("google")} className="btn btn-default  w-full">Continue with Google</button>


                    <p>Already have an account? <Link href="/signin" className="text-primary">Sign in</Link></p>
                </fieldset>
            </main>

            <Footer />
        </div>
    )
}
