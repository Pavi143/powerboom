"use client";

import bottle from "../assets/bottle.jpg";
import Button from "@mui/material/Button";
import NavBar from "@/components/nav";
import Link from "@mui/material/Link";
import Footer from "@/components/footer";
import Container from "@mui/material/Container";
import Product from "@/svg/product";
import image1 from "@/assets/Rectangle 76.png";
import image2 from "@/assets/Rectangle 77.png";
import image3 from "@/assets/Rectangle 78.png";
import image4 from "@/assets/Rectangle 79.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import powerboom from "@/assets/powerboom.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";

import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

export default function Home() {
  const sectionStyle1 = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "blue",
  };
  const sectionStyle2 = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:  'linear-gradient(to right, rgb(7, 35, 51), rgba(16, 80, 139, 1))'
   
  };
  const sectionStyle3 = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(11, 55, 97)"
  };
  const sectionStyle4 = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(203, 237, 240)",
  };
  const sectionStyle5 = {
    height: "10%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
  };
  const sectionStyle6 = {
    height: "20%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgb(0, 13, 33)"
   
  };

  return (
    <Fullpage>
      <FullpageNavigation />
     
      <FullPageSections>
      <FullpageSection  style={sectionStyle5} >
        <NavBar/>

      </FullpageSection>
        <FullpageSection style={sectionStyle1}>
          <div className="w-full ">
            <video width="100%" height="auto" controls  loop>
              <source src="/powerboomvideo.mp4" type="video/mp4" />
            </video>
            
          </div>
         
        </FullpageSection>

        <FullpageSection style={sectionStyle2}>
        <div className="flex w-full h-full "  style={{ backgroundImage: `radial-gradient(circle, #FFFFFF 0%, #06A1E0 57%, #0B3761 100%)` }}>
            <div className="flex w-1/2" >
              <img src={powerboom.src}></img>
            </div>
            <div className="flex flex-col gap-8 w-1/2 items-center justify-center  ">
              <div className="flex gap-4 w-1/2 ">
                <div className="flex gap-2 ">
                  <StarBorderIcon />
                  <p>ENERGY BOOST</p>
                </div>
                <div className="flex gap-2">
                  <StarBorderIcon />
                  <p>HIGH CAFFIENE</p>
                </div>
              </div>
              <div className="flex gap-4 w-1/2">
                <div className="flex gap-4">
                  <StarBorderIcon />
                  <p>GRAB AND GO</p>
                </div>
                <div className="flex gap-2 ">
                  <StarBorderIcon />
                  <p>NATURAL FLAVOURS</p>
                </div>
              </div>
              <div className="flex m-2 ">
                <Button variant="contained">BUY POWERBOOM NOW</Button>
              </div>
            </div>
          </div>
        </FullpageSection>

        <FullpageSection style={sectionStyle3}>
          <div className="flex m-16 w-full h-full border-y-2 text-white ">
            <div className="flex flex-col gap-16 items-center justify-center w-1/3 border-r-2 ">
              <div className="flex flex-col m-4 gap-16">
                <p className="text-6xl">Lorem ipsum</p>
                <p className="text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16 items-center justify-center w-1/3 border-r-2">
              <div className="flex flex-col m-4 gap-16">
                <p className="text-6xl">Lorem ipsum</p>
                <p className="text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-16 items-center justify-center w-1/3 ">
              <div className="flex flex-col  m-4 gap-16 ">
                <p className="text-6xl ">Lorem ipsum</p>
                <p className="text-2xl ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          </div>
        </FullpageSection>

        <FullpageSection style={sectionStyle4}>
          <div className="flex flex-col gap-16 justify-center  ">
            <div className="flex  m-2">
              <p className="text-6xl font-bold">
                FOLLOW US ON WEB. STAY ENERGIZED
              </p>
            </div>
            <div className="bg-blue-950 m-4 ">
              <div className="flex m-2 gap-4">
                <img src={image1.src} className="w-64 object-contain"></img>
                <img src={image2.src} className="w-64 object-contain"></img>
                <img src={image3.src} className="w-64 object-contain"></img>
                <img src={image4.src} className="w-64 object-contain"></img>
              </div>
            </div>
          </div>
        </FullpageSection>
        <FullpageSection style={sectionStyle6}>
          <Footer/>

        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
