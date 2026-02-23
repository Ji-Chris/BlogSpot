"use client"
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { username } from "better-auth/plugins";

export default function RegisterPage() {
    const router = useRouter();

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordCheck,setPasswordCheck] = useState("")
    const [name,setName] = useState("")
    const [image,setImage] = useState("/default-pfp.svg")
    const [loading,setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent){
        if (password != passwordCheck){
            alert("Passwords do not match")
            return;
        }
        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name, // user display name
            image, // User image URL (optional)
            callbackURL: "/"
        }, {
            onRequest: (ctx) => {
                setLoading(true)
            },
            onSuccess: (ctx) => {
                setLoading(false)
                router.push("/")
            },
            onError: (ctx) => {
                setLoading(false)
                alert(ctx.error.message);
            },
        });
    }
    
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-md text-black shadow-2xl rounded-2xl p-8 border border-zinc-800">

                <h1 className="text-3xl font-bold text-center mb-8 text-blue-500">
                    Create Account
                </h1>

                <form className="space-y-6">

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-black mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-black text-black placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        />
                    </div>

                    {/*Email*/}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            required
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder="Choose a username"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-black text-black placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            placeholder="Enter a secure password"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-black text-black placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        />
                    </div>

                    {/* Password Again for check */}
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">
                            Password Check
                        </label>
                        <input
                            type="password"
                            required
                            value={passwordCheck}
                            onChange={(e)=> setPasswordCheck(e.target.value)}
                            placeholder="Enter the same password again"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-black text-black placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        />
                    </div>

                    {/* Image Upload 
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">
                        Profile Image
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full text-sm text-zinc-400
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-lg file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-400 file:text-white
                        hover:file:bg-blue-600 cursor-pointer"
                      />
                    </div>

                    */}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg font-semibold bg-blue-400 hover:bg-sky-600 transition duration-200 shadow-lg"
                    >
                        Register
                    </button>

                </form>

                <p className="text-center text-sm text-zinc-500 mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-blue-500 font-medium hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </main>


  )
}