import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">

      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/saved">Saved</Link>
      </div>

      <Link className="p-3 border font-semibold shadow-md focus:outline-none focus:ring-1 focus:ring-offset-1 rounded-lg"
      href="/login">
        Login
      </Link>
    </nav>
  );
}
