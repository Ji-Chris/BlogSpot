"use client"
import Link from "next/link";
import { useState , useRef, useEffect} from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const { data:session } = authClient.useSession()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropDownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(()=>{
    function handleOutsideClick(e: MouseEvent){
      if (dropDownRef.current && !dropDownRef.current.contains(e.target as Node)){
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown",handleOutsideClick)
  },[])

  async function handleLogout(){
    await authClient.signOut()
    router.push("/login")
  }



  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/saved">Saved</Link>
        <Link href="/about">About</Link>
      </div>

      {session?(
        <div className="relative" ref={dropDownRef}>
          <button
            onClick={()=>setDropdownOpen(!dropdownOpen)}
            className="rounded-full overflow-hidden w-10 h-10 border-2 border-white"
          >
            <Image
              src={session.user.image ?? "/default-pfp.svg"}
              alt="Profile"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg py-1 z-50">
              <Link
                href="/profile"
                onClick={() => setDropdownOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Profile
              </Link>
              <Link
                href="/settings"
                onClick={() => setDropdownOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Settings
              </Link>
              <Link
                href="/my-posts"
                onClick={() => setDropdownOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                My Posts
              </Link>
              <hr className="my-1 border-gray-200" />
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600 cursor-pointer"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ):(
        <Link className="p-3 border font-semibold shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1 rounded-lg"
        href="/login">
          Login
        </Link>
      )}
      
    </nav>
  );
}
