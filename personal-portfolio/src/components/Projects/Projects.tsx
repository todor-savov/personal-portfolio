import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SiJavascript, SiTypescript, SiFirebase, SiCss3 } from 'react-icons/si';
import { FaReact, FaGithub, FaHtml5, FaDatabase, FaCog, FaJava } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Avatar, Tooltip, Typography } from '@mui/material';
import MaterialUILogo from '../../assets/MaterialUILogo.png';
import MySQLlogo from '../../assets/mysql_logo.png';
import { projects } from '../../common/constants';
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import './Projects.css';

type TechIcons = {
  React: JSX.Element;
  JavaScript: JSX.Element;
  TypeScript: JSX.Element;
  MaterialUI: JSX.Element;
  HTML5: JSX.Element;
  CSS: JSX.Element;
  Firebase: JSX.Element;
  WebStorageAPI: JSX.Element;
  JavaSwing: JSX.Element;
  JDBC: JSX.Element;
  MySQL: JSX.Element;
  WMI: JSX.Element;
  [key: string]: JSX.Element;
};

const techIcons: TechIcons = {
  React: <FaReact color="#61DAFB" className='tech-icons' />,     
  JavaScript: <SiJavascript color="#F7DF1E" className='tech-icons' />,
  TypeScript: <SiTypescript color="#007ACC" className='tech-icons' />, 
  MaterialUI: <img src={MaterialUILogo} className='tech-icons' />,
  HTML5: <FaHtml5 color="#E34F26" className='tech-icons' />,
  CSS: <SiCss3 color="#1572B6" className='tech-icons' />,
  Firebase: <SiFirebase color="#FFCA28" className='tech-icons' />,
  WebStorageAPI: <FaDatabase color="#4A90E2" className='tech-icons' />,
  JavaSwing: <FaJava color="#f8981d" className='tech-icons' />,
  JDBC: <FaDatabase color="#f8981d" className='tech-icons' />,
  MySQL: <img src={MySQLlogo} className='tech-icons' />,
  WMI: <FaCog color="#0078D4" className='tech-icons' />
};

const Projects = () => {
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.1, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }} transition={{ duration: 3 }}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <Swiper direction='vertical' className="swiper-container"
              modules={[Autoplay, Pagination, Navigation]} 
              autoplay={{ delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={30} slidesPerView={1}
              pagination={{ clickable: true, dynamicBullets: true }}
              onSwiper={() => {}} onSlideChange={() => {}}               
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="swiper-slide">     
            <div className="text-container">
              <Typography variant="h5">{project.title}</Typography>
              <Typography variant="body1">{project.description}</Typography>
              <Typography variant="h6">Tech Stack:</Typography>

              <div className="tech-stack">
                {project.techStack && project.techStack.map((tech, i) => (
                    <div className="tech-item" key={i}>
                        {techIcons[tech] || tech}
                        <Typography variant="caption">{tech}</Typography>
                    </div>
                ))}
              </div>
            </div>

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
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default Projects;
