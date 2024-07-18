"use client"
import { NavLink } from "react-router-dom";
import Link from '@mui/material/Link';
import logo from '@/assets/logo.png'

export default function NavBar() {
  return (
    <div className="flex justify-between gap-4 w-full  backdrop-blur-md bg-white/50 opacity-90">
        <div className="flex m-2">
            <img src={logo.src} className="w-full object-contain"></img>
        </div>
        <div className="flex justify-evenly items-center gap-4 w-1/2 ">
            <Link href="/" underline="hover" className="text-white">Home</Link>
            <Link href="/about" underline="hover" className="text-white">About Us</Link>
            <Link href="/nav" underline="hover" className="text-white" >Contact Us</Link>
        </div>
    </div>
  );
}
