import { useEffect, useState } from "react";
import TextTransition, { presets } from 'react-text-transition';
import { Box, Typography } from "@mui/material";
import { SiReact, SiJavascript, SiTypescript } from 'react-icons/si';

const Transition = () => {
    const [index, setIndex] = useState(0);

    const techSkills = [
        "React",
        "JavaScript",
        "TypeScript",  
    ];

    const icons = [
        <SiReact size={40} color="#61DAFB" />,
        <SiJavascript size={40} color="#f0db4f" />,
        <SiTypescript size={40} color="#007acc" />,         
    ];

    useEffect(() => {
        const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', fontWeight: "bold", mt: 2 }}>
            I am a Front-End Developer with&nbsp;
            <Box style={{ display: 'flex', alignItems: 'center', minWidth: '250px' }}>
                {icons[index % icons.length]}&nbsp;
                <span style={{ color: "#1976d2" }}>
                    <TextTransition springConfig={presets.wobbly}>
                        {techSkills[index % techSkills.length]}
                    </TextTransition>
                </span>
            </Box>
        </Typography>
    );
};

export default Transition;
