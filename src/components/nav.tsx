"use client"
import { NavLink } from "react-router-dom";
import Link from '@mui/material/Link';

export default function NavBar() {
  return (
    <div className="flex justify-between gap-4 w-full py-4">
        <div className="flex px-4 w-1/2 ">
            <p  className="text-xl font-semibold"></p>
        </div>
        <div className="flex justify-evenly gap-4 w-1/2">
            <Link href="/" underline="hover" className="text-white">Home</Link>
            <Link href="/about" underline="hover" className="text-white">About Us</Link>
            <Link href="/contact" underline="hover" className="text-white" >Contact Us</Link>
        </div>
    </div>
  );
}
