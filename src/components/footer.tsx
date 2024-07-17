import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';


export default function Footer() {
    return (
       
        <div className="flex flex-col w-full bg-blue-300">
            <div className="flex flex-col ">
                <div className='flex justify-center my-2'>
                    <p >Follow us on</p>
                </div>
                {/* <div className='flex justify-center gap-4 py-2'>
                    <Link href="/" underline="hover">Home</Link>
                    <Link href="/about" underline="hover">About Us</Link>
                    <Link href="/contact" underline="hover">Contact Us</Link>
                </div> */}
                <div className='flex justify-center gap-4 my-4'>
                    <Link href='https://www.instagram.com' underline="none"><InstagramIcon fontSize="small" /></Link>
                    <Link href='https://www.instagram.com' underline="none"><XIcon fontSize="small" /></Link>
                    <Link href='https://www.facebook.com' underline="none"><FacebookIcon fontSize="small" /></Link>
                    <Link href='https://www.facebook.com' underline="none"><YouTubeIcon fontSize="small" /></Link>
                    <Link href='https://www.facebook.com' underline="none"><EmailIcon fontSize="small" /></Link>
                </div>
                
            </div>
            <div className='flex flex-col bg-blue-500 w-full'>
                <div className='flex flex-col my-4 justify-center items-center'>
                    <p>Made with <span>&#x2764;</span> by Mockup can </p>
                </div>
            </div>
        </div>
        
    );
}
