import { Box, IconButton } from "@mui/material";
import AnimatedText from "react-animated-text-content";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import logoAnimation from "../../assets/gummy-app-development.png";
import "./Home.css";

const Home = () => {

  const welcomeText = ["Hello, I'm Todor Savov.", "I'm a Front-End Developer.", "Welcome to my portfolio."];

  return (
    <Box className="home">
            {welcomeText.map((text, index) => (
                <AnimatedText 
                    key={index}
                    type="chars"
                    animation={{
                        x: "200px",
                        y: "-20px",
                        scale: 1.1,
                        ease: "ease-in-out",             
                    }}
                    animationType="float"
                    interval={0.05}
                    duration={0.8}
                    includeWhiteSpaces
                    threshold={0.1}
                    rootMargin="20%"
                    className="animated-text"
                >
                    {text}
                </AnimatedText>
            ))}
 
            <img src={logoAnimation} alt="logo" className="logo-animation" />
            <span>Illustration by <a href="https://icons8.com/illustrations/author/SH5qVUiWnjy4">Vijay Verma Ouch!</a></span>

            <Box className="social-icons" sx={{ mt: 2 }}>
                <IconButton
                    component="a"
                    href="https://github.com/todor-savov"
                    target="_blank"
                    aria-label="GitHub"
                    rel="noopener noreferrer"
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/todor-savov-4a14253b/"
                    target="_blank"
                    aria-label="LinkedIn"
                    rel="noopener noreferrer"
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton
                    component="a"
                    href="mailto:todor.savov@abv.bg"
                    aria-label="Email"
                >
                    <EmailIcon fontSize="large" />
                </IconButton>
            </Box>        
    </Box>
  );
};

export default Home;
