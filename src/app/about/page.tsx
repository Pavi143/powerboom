"use client";
import NavBar from "@/components/nav";
import aboutImg from "@/assets/about.jpg";
import Footer from "@/components/footer";
import Container from "@mui/material/Container";
import Mission from "@/svg/mission";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

const items = [
  "Power Boom is a dynamic and innovative energy drink company committed to providing a powerful boost to your day.",
  "Our energy drinks are designed to energize your body and mind, ensuring you stay active and alert throughout your busy schedule.",
  "Whether you are hitting the gym, working late, or just need a pick-me-up, Power Boom has you covered.",
];

const sectionStyle = {
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export default function About() {
  return (
    <Container maxWidth="md">
      <Fullpage>
        <FullPageSections>
  
          <FullpageSection style={sectionStyle}>
            <h2>screen1</h2>
            
          </FullpageSection>

          
          <FullpageSection style={sectionStyle}>
            <h2>screen2</h2>
          
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </Container>
  );
}
