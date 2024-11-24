import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { experience } from "../../common/constants";
import "react-vertical-timeline-component/style.min.css";
import './Experience.css';

const Experience = () => (
  
      <motion.div
        initial={{ opacity: 0, scale: 0.1, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }} transition={{ duration: 3 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <div className='experience-container'>
          <VerticalTimeline>          
            {experience.map((item, index) => (          
              <VerticalTimelineElement key={index} className="experience-item"                
                  date={item.date}
                  dateClassName="experience-date"

                  contentStyle={{
                    background: "white",
                    borderRadius: "10px",
                    padding: "1rem",
                  }}
                        
                  contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}


                  icon={<item.icon />}
                  iconStyle={{
                    background: "rgb(233, 30, 99)",
                    color: "#fff",
                  }}
                              >
                  <Typography variant='h6' id='experience-title'>{item.title}</Typography>
                  <Typography variant='body1' id='experience-description'>{item.description}</Typography>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </motion.div>
);

export default Experience;