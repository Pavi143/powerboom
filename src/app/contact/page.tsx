import NavBar from "@/components/nav";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Link } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import bottle from "@/assets/bottle.jpg"
import Footer from "@/components/footer";
import contact from "@/assets/contactus.png";
import Container from '@mui/material/Container';

export default function Contact(){

    return  (
    <Container maxWidth="md">
        <div  className="bg-[url('/contactus.png')] bg-center bg-cover">
                        
                        <div className="flex w-full py-24 justify-center ">
                            <p className="text-4xl font-semibold mb-24">CONNECT WITH US</p>
                        </div>
                        <div className="flex flex-col w-full h-full py-24">
          <div className="flex w-full  justify-center">


            <div className="flex flex-col gap-4 w-1/2 items-center py-4 ">
              <div className="flex gap-4 w-1/3">
                                    <Link href='https://googlemaps.com'><LocationOnIcon fontSize="small" /></Link>
                <p>Dubai,United Arab Emirates</p>
              </div>

              <div className="flex gap-4 w-1/3">
                                    <Link href='https://gmail.com'><MailOutlineIcon fontSize="small"/></Link>
                                    <Link href='https://gmail.com' underline="none">abcd@gmail.com</Link>
              </div>

              <div className="flex gap-4 w-1/3">
                                    <Link href='https://gmail.com'><PhoneIcon fontSize="small" /></Link>
                                    <Link href='https://gmail.com' underline="none">987654321</Link>  
              </div>
                                

            </div>
            <div className="flex flex-col gap-4 w-1/2 items-center py-4">
                                <div className="flex w-1/2  "><p>Stay Upadted with out latest promotions, and events by following us on</p></div>
              <div className="flex gap-4 w-1/2 ">
                                <Link href='https://www.instagram.com' underline="none"><InstagramIcon fontSize="small"/></Link>
                                <Link href='https://www.instagram.com' underline="none">@powerboom_uae</Link>  
        </div>

      </div>
                            
                        


                        </div>

                            
                    
                    </div>            
              
                    </div>
    </Container>
                            
    )
            
}
