import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SiJavascript, SiTypescript, SiFirebase, SiCss3 } from 'react-icons/si';
import { FaReact, FaGithub, FaHtml5, FaDatabase, FaCog, FaJava } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { Avatar, Tooltip, Typography } from '@mui/material';
import MaterialUILogo from '../../assets/MaterialUILogo.png';
import MySQLlogo from '../../assets/mysql_logo.png';
import { projects } from '../../common/constants';
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
  React: <FaReact color="#61DAFB" size={50} />,     
  JavaScript: <SiJavascript color="#F7DF1E" size={50} />,
  TypeScript: <SiTypescript color="#007ACC" size={50} />, 
  MaterialUI: <Avatar src={MaterialUILogo} variant='square'/>,
  HTML5: <FaHtml5 color="#E34F26" size={50} />,
  CSS: <SiCss3 color="#1572B6" size={50} />,
  Firebase: <SiFirebase color="#FFCA28" size={50} />,
  WebStorageAPI: <FaDatabase size={50} color="#4A90E2" />,
  JavaSwing: <FaJava size={50} color="#f8981d" />,
  JDBC: <FaDatabase size={50} color="#f8981d" />,
  MySQL: <Avatar src={MySQLlogo} variant='square' sx={{ width: 55, height: 35 }}/>,
  WMI: <FaCog size={50} color="#0078D4" /> 
};

const Projects = () => {
  
  return (
      <Swiper direction='vertical' className="swiper-container"
              modules={[Autoplay, Pagination, Navigation]} 
              autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              spaceBetween={30} slidesPerView={1}
              pagination={{ clickable: true, dynamicBullets: true }}
              onSwiper={() => {}} onSlideChange={() => {}}               
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="swiper-slide">     
            <div className="text-container">
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 5 }}>{project.title}</Typography>

              <Typography variant="body1" sx={{ fontSize: '1.3rem', marginBottom: 5 }}>{project.description}</Typography>

              <div className="tech-stack">
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Tech Stack:</Typography>
                
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
  );
}

export default Projects;
