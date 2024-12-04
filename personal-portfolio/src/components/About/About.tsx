import { Box, Typography, Avatar } from '@mui/material';
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiCss3 } from 'react-icons/si';
import ownPhoto from '../../assets/IMG_0004-Photoroom.png';
import MaterialUILogo from '../../assets/MaterialUILogo.png';
import './About.css';

const About = () => {
    
    const techStack = [
        { name: 'React', icon: <FaReact color="#61DBFB" className='tech-icon' /> },
        { name: 'JavaScript', icon: <FaJsSquare color="#F0DB4F" className='tech-icon' /> },
        { name: 'TypeScript', icon: <SiTypescript color="#007ACC" className='tech-icon' /> },
        { name: 'Firebase', icon: <SiFirebase color="#FFCA28" className='tech-icon' /> },
        { name: 'MaterialUI', icon: <img src={MaterialUILogo} className='tech-icon' />},
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" className='tech-icon' /> },
        { name: 'CSS', icon: <SiCss3 color="#1572B6" className='tech-icon' /> }
    ];

    const introText = 
        `   I am a versatile front-end developer with a unique blend of experience in business, finance, and technology. 
            My journey began with a Master's in European Business and Finance from Nottingham Business School, which provided 
            me with a solid understanding of the business landscape. Driven by a passion for technology, I later pursued a 
            second Master’s degree in Distributed Systems and Mobile Technologies at Sofia University St. Kliment Ohridski, 
            where I discovered my enthusiasm for programming and problem-solving.

            My transition into front-end development began with hands-on projects, including creating dynamic, user-focused 
            applications using React, TypeScript, and Firebase. Alongside my technical expertise, my background in technical 
            support at SiteGround honed my skills in troubleshooting, attention to detail, and effective communication. 
            Today, I am passionate about building interactive, responsive applications and continuously expanding my skills in 
            JavaScript and front-end technologies.
        `;        

    const cleanedIntroText = introText.replace(/\s+/g, " ").trim();

  return (
        <motion.div
            initial={{ opacity: 0, scale: 0.1, rotate: -270 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }} transition={{ duration: 3 }}
            style={{ position: 'relative', zIndex: 1 }}
        >
            <Box className="main-container">
                <Box className="first-container">
                    <Avatar alt="Todor-Savov" src={ownPhoto} variant='square' id='avatar-photo' />

                    <Box className="text-container">
                        <Typography variant="h5" gutterBottom id='about-me' sx={{ fontWeight: "bold", color: 'black' }}> ABOUT ME </Typography>
                                    
                        <div className="typewriter-container">
                                {cleanedIntroText.split(" ").map((word, index) => (
                                    <span key={index} className="typewriter-word" style={{ animationDelay: `${index * 0.2}s` }}>
                                        {word + "\u00A0"}
                                    </span>
                                ))}
                        </div>
                    </Box>
                </Box>

                <Box className="second-container">
                    <Typography variant="h5" gutterBottom id='tech-stack'> Tech Skills </Typography>
                
                    <div id='container-scroll'>
                        <div className='scroll'>
                            {techStack.map((tech, index) => (
                                <div className='item' key={index}>
                                    {tech.icon}
                                    <Typography variant="body1" color="text.secondary"> {tech.name} </Typography>
                                </div>
                            ))}
                        </div>
                    </div>
                </Box>
            </Box>
        </motion.div>
  );
};

export default About;