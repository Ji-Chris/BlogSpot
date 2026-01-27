import Link from "next/link";
import Image from "next/image";


export default function Footer(){
    return(
        <footer className="border-t py-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Basic footer
        </footer>
    )
     
}