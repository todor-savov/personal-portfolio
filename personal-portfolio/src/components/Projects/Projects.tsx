import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { projects } from '../../common/constants';
import { SiJavascript, SiTypescript, SiCss3, SiFirebase } from 'react-icons/si';
import Design from '@mui/icons-material/DesignServices'; // Material UI design icon
import { FaReact } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi'; // External link icon for live site
import { FaGithub } from 'react-icons/fa'; // GitHub icon
import { Box, Tooltip, Typography } from '@mui/material';
import 'swiper/css';  // Basic Swiper CSS
import 'swiper/css/navigation';  // For navigation arrows
import 'swiper/css/pagination';  // For pagination bullets
import 'swiper/css/autoplay';  // For autoplay
import './Projects.css';

const techIcons = {
  React: <FaReact color="#61DAFB" size={50} />,      // React icon with its color
  JavaScript: <SiJavascript color="#F7DF1E" size={50} />, // JavaScript icon with color
  TypeScript: <SiTypescript color="#007ACC" size={50} />, // TypeScript icon with color
  'Material UI': <Design />, // Material UI icon with color
  CSS: <SiCss3 color="#1572B6" size={50} />,          // CSS icon with its color
  Firebase: <SiFirebase color="#FFCA28" size={50} />, // Firebase icon with color
};

const Projects = () => {
  return (
    <Box> 
      <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'left', margin: '2rem 0' }}>Projects</Typography>
      <Swiper modules={[Autoplay, Pagination, Navigation]} autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={30} slidesPerView={1}
              pagination={{ 
                            clickable: true, 
                            dynamicBullets: true, 
                            bulletClass: 'swiper-pagination-bullet', 
                            bulletActiveClass: 'swiper-pagination-bullet-active' 
                          }}
              onSwiper={() => {}} onSlideChange={() => {}} 
              className="swiper-container"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="image-container">
              <img src={project.image} alt={project.title} />
              <div className="buttons-container">
                {project.github && (
                  <Tooltip title="GitHub" arrow>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={30} color="white" />
                    </a>
                  </Tooltip>
                )}
                {project.liveSite && (
                  <Tooltip title="Live" arrow>
                    <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
                      <FiExternalLink size={30} color="white" />
                    </a>
                </Tooltip>
                )}
              </div>
            </div>
            <div className="text-container">
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{project.title}</Typography>
              <Typography variant="body1">{project.description}</Typography>
              <div className="tech-stack">
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Tech Stack:</Typography>
                {project.techStack && project.techStack.map((tech, i) => (
                  <Tooltip key={i} title={tech} arrow>
                    <span className="tech-item">{techIcons[tech] || tech}</span>
                  </Tooltip>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Projects;
