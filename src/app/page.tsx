"use client"
import { Divider } from '@mui/material';
import bottle from '../assets/bottle.jpg'
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavBar from '@/components/nav';
import Link from '@mui/material/Link';
import Footer from '@/components/footer';
import Container from '@mui/material/Container';
import Product from '@/svg/product'
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

const Items=[
  {
    title:"Ingredients",
    subtitle:"Organic"
  },
  {
    title:"Material",
    subtitle:"Food Grade"
  },
  {
    title:"Flavours",
    subtitle:"9 Variation"
  },
  {
    title:"Volumes",
    subtitle:"250 ml"
  },
  {
    title:"Delivery",
    subtitle:"Free"
  }
]

export default function Home() {
  const sectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    
    <Fullpage>
      <FullpageNavigation/>
      <FullPageSections>

        <FullpageSection style={sectionStyle}>
          <h2>screen1</h2>
          
        </FullpageSection>

        
        <FullpageSection style={sectionStyle}>
          <h2>screen2</h2>
        
        </FullpageSection>

        <FullpageSection style={sectionStyle}>
          <h2>screen3</h2>
        
        </FullpageSection>

        <FullpageSection style={sectionStyle}>
          <h2>screen4</h2>
        
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  
    
  );
}
