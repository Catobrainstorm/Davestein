import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75 )} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          option={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview. </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          A 19-year-old full-stack web developer, React developer, backend engineer, and tech researcher with a passion for solving complex problems through clean code and creative systems. I’m not just building websites — I’m building the future. I lead with precision, learn with speed, and execute with depth. As the lead developer for Smartan House — a rising hub of youth innovation in Nigeria — I’ve crafted scalable digital platforms that inspire change. My work spans web architecture, backend systems, and AI-powered experimentation, all backed by a relentless drive to innovate and a mind sharpened by mathematics, cybersecurity, and predictive modeling. I don’t just write code — I bring visions to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")