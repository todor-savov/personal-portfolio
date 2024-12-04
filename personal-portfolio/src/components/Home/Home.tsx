import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Transition from "../TextTransition/Transition";
import logoAnimation from "../../assets/developer.jpg";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
    
    const welcomeText = [
        "Hello, I'm Todor Savov.",
        "Welcome to my portfolio."
    ];
      
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.1, rotate: -270 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }} transition={{ duration: 3 }}
            style={{ position: 'relative', zIndex: 1 }}
        >
            <Box className="home">
                {welcomeText.map((text, index) => (
                    <Typography variant="h4" key={index}>
                        {text.split('').map((char, index) => (
                            <span key={index} style={{ animationDelay: `${index * 0.18}s` }} className="typewriter-character">
                                {char === ' ' ? '\u00A0' : char}
                            </span>
                        ))}
                    </Typography>
                ))}

                <Transition />
    
                <img src={logoAnimation} alt="logo" className="logo-animation" />
                {/* <span id="copyrights">Illustration by <a href="https://icons8.com/illustrations/author/SH5qVUiWnjy4">Vijay Verma Ouch!</a></span> */}

                <Box className="social-icons-home">
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
        </motion.div>
    );
};

export default Home;