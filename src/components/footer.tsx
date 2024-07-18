import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import logo from '@/assets/logo.png';


export default function Footer() {
    return (
       
        <div className="flex flex-col w-full text-white">
            <div className="flex  justify-around gap-4 my-4">
                <div className='flex my-2'>
                    <img src={logo.src} className='w-full object-contain'></img> 
                </div>
                <div className='flex flex-col  gap-4 '>
                    <Link href="/about" underline="hover">About Us</Link>
                    <Link href="/contact" underline="hover">Contact Us</Link>
                    <Link href="/" underline="hover">Products</Link>
                </div>
                <div className='flex flex-col  gap-4 '>
                    <p className='text-sm'>TERMS & CONDITIONS</p>
                    <p className='text-sm'>PRIVACY POLICY</p>
                    <p className='text-sm'>STORE</p>
                </div> 
                <div className='flex justify-center gap-4 my-4'>
                    <Link href='https://www.instagram.com' underline="none"><InstagramIcon fontSize="small" /></Link>
                    <Link href='https://www.instagram.com' underline="none"><XIcon fontSize="small" /></Link>
                    <Link href='https://www.facebook.com' underline="none"><FacebookIcon fontSize="small" /></Link>
                    <Link href='https://www.facebook.com' underline="none"><YouTubeIcon fontSize="small" /></Link>
                    <Link href='https://www.facebook.com' underline="none"><EmailIcon fontSize="small" /></Link>
                </div>
                
            </div>
            <div className='flex flex-col bg-sky-200 w-full text-black'>
                <div className='flex flex-col my-4 justify-center items-center'>
                    <p>Made with <span>&#x2764;</span> by Powerboom </p>
                </div>
            </div>
        </div>
        
    );
}
