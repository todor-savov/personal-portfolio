import { Box, Typography, Avatar } from '@mui/material';
import { FaReact, FaJsSquare, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiMaterialdesignicons } from 'react-icons/si';
import ownPhoto from '../../assets/IMG_0004-Photoroom.png';
import './About.css';

const About = () => {
    
    const techStack = [
        { name: 'React', icon: <FaReact size={50} color="#61DBFB" /> },
        { name: 'JavaScript', icon: <FaJsSquare size={50} color="#F0DB4F" /> },
        { name: 'TypeScript', icon: <SiTypescript size={50} color="#007ACC" /> },
        { name: 'Firebase', icon: <SiFirebase size={50} color="#FFCA28" /> },
        { name: 'Material-UI', icon: <SiMaterialdesignicons size={50} color="#0081CB" /> },
        { name: 'SQL', icon: <FaDatabase size={50} color="#336791" /> },
    ];

  return (
    <Box className="main-container">
        <Box className="first-container">
            <Avatar alt="Todor-Savov" src={ownPhoto} variant='square' id='avatar-photo' />

            <Box className="text-container">
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold'}}> ABOUT ME </Typography>
                
                <Typography variant="body1" color="text.secondary" sx={{textAlign: 'justify'}}>
                    I am a versatile front-end developer with a unique blend of experience in business, finance, and technology. 
                    My journey began with a Master's in European Business and Finance from Nottingham Business School, which provided 
                    me with a solid understanding of the business landscape. Driven by a passion for technology, I later pursued a 
                    second Master’s degree in Distributed Systems and Mobile Technologies at Sofia University St. Kliment Ohridski, 
                    where I discovered my enthusiasm for programming and problem-solving.
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{textAlign: 'justify'}}>
                    My transition into front-end development began with hands-on projects, including creating dynamic, user-focused 
                    applications using React, TypeScript, and Firebase. Alongside my technical expertise, my background in technical 
                    support at SiteGround honed my skills in troubleshooting, attention to detail, and effective communication. 
                    Today, I am passionate about building interactive, responsive applications and continuously expanding my skills in 
                    JavaScript and front-end technologies.
                </Typography>
            </Box>
        </Box>

        <Box className="second-container">
            <Typography variant="h5" gutterBottom id='tech-stack'> Tech Stack </Typography>
        
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
  );
};

export default About;
