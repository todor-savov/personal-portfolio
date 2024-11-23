import { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';
import { Box, Typography } from "@mui/material";
import { SiReact, SiJavascript, SiTypescript } from 'react-icons/si';
import '../Home/Home.css';

const Transition = () => {
    const [index, setIndex] = useState(0);

    const techSkills = [
        "React",
        "JavaScript",
        "TypeScript",  
    ];

    const icons = [
        <SiReact size={30} color="#61DAFB" />,
        <SiJavascript size={30} color="#f0db4f" />,
        <SiTypescript size={30} color="#007acc" />,         
    ];

    useEffect(() => {
        const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Typography variant="h4" id='front-dev'>
            I am a Front-End Developer with&nbsp;
            <Box id='tech-set'>
                <span style={{ color: "#1976d2" }}>
                    {icons[index % icons.length]}&nbsp;
                    <TextTransition springConfig={presets.wobbly}>
                        {techSkills[index % techSkills.length]}
                    </TextTransition>
                </span>
            </Box>
        </Typography>
    );
};

export default Transition;
