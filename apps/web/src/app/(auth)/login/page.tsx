"use client"

import { useState } from "react"
import LoginButtons from "@/components/Login/LoginButtons"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [lloading, setLoading] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      // without auth 
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        throw new Error("Invalid credentials")
      }

      // push in router later
      window.location.href = "/"
    } catch (err: any) {
      console.log(err.message)
    }
  }

  return (
    <div className="login-container min-h-screen flex items-center justify-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && (
          <p className="text-red-600 text-sm text-center">{error}</p>
        )}

        <div className="email-field flex flex-col gap-1">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="psswd-field flex flex-col gap-1">
          <label className="text-sm font-medium">Password</label>
          <input
            type="password"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button
          className="cursor-pointer bg-sky-500 text-black py-2 rounded hover:bg-blue-600 transition ease-in duration-200 "
        > Login
        </button>


        <LoginButtons/>

        <p className="text-sm text-center text-gray-600">
          <Link href="/register" className="underline">
            Sign up instead?
          </Link>
        </p>
      </form>
    </div>
  )
}