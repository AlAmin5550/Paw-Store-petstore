"use client";
import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Page() {
    const router = useRouter();
    const handleSignUp = async (e) => {
        e.preventDefault();
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        };
        const resp = await fetch("http://localhost:3000/signup/api", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await resp.json();
        if (resp.status === 200) {
            e.target.reset();
            router.push("/");
        }
    }
    const handleSocialSignUp = async (provider) => {
        const resp = await signIn(provider);
        if (resp.status === 200) {
            router.push("/");
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
                        <input type="text" name='name' className="input w-full" placeholder="Name" />
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" />

                        <label className="label mt-2">Password</label>
                        <input type="password" name='password' className="input w-full" placeholder="Password" />

                        <button type='submit' className="btn btn-neutral mt-4 w-full" >Sign Up</button>
                        <p className='text-gray-500 text-center my-2'>or</p>

                    </form>
                    <button onClick={() => handleSocialSignUp("google")} className="btn btn-default  w-full">Continue with Google</button>


                    <p>Already have an account?  <a href="/signin" className="text-primary">Sign in</a></p>
                </fieldset>
            </main>

            <Footer />
        </div>
    )
}
