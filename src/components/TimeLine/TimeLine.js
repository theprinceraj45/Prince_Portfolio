import React, { useState, useRef, useEffect } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';
import { motion } from "framer-motion";


const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  }

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));

      scroll(carouselRef.current, scrollLeft);
    }
  }

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

      setActiveItem(index);
    }
  }

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    }

    window.addEventListener('resize', handleResize);
  }, []);
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      {/* Profile Image */}
      <div
        style={{
          margin: '20px auto',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <motion.img
          src="/images/profile.jpg"
          alt="Profile"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '4px solid #00ADB5',
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <SectionText>
        Hi, I’m Prince Raj! 👋<br />
        I’m a Civil Engineering enthusiast with a strong interest in structural design,
        sustainable construction, and project management tools. Alongside my engineering
        expertise, I’ve developed skills in data analysis, visualization, and web
        technologies, giving me a unique ability to combine technical precision with
        data-driven insights.
        <br />
        💡 What I Do:
        <br />
        Design and model using AutoCAD, Revit, and STAAD Pro
        <br />
        Analyze and visualize data using Python, Pandas, and Power BI
        <br />
        Build and optimize web solutions using React.js and Node.js
        <br />
        🌱 My Goal: To leverage both engineering and analytics to create innovative,
        sustainable, and efficient solutions for real-world problems.
        <br />
        Outside of work, I absolutely love Singing, Playing & Watching Sports Especially
        Cricket and I enjoy learning new tools, exploring modern tech trends, and photography.
      </SectionText>
      {/* Resume Buttons */}
<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', gap: '10px' }}>
  <a href="/resume.pdf" download>
    <button style={{
      padding: '12px 20px',
      fontSize: '16px',
      borderRadius: '8px',
      background: '#00ADB5',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)'
    }}>
      📄 Download Resume
    </button>
  </a>

  <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
    <button style={{
      padding: '12px 20px',
      fontSize: '16px',
      borderRadius: '8px',
      background: '#393E46',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)'
    }}>
      👀 View Resume
    </button>
  </a>
</div>
<br/><br/>
      {/* Carousel */}
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        {TimeLineData.map((item, index) => (
          <CarouselMobileScrollNode key={index} final={index === TOTAL_CAROUSEL_COUNT - 1}>
            <CarouselItem
              index={index}
              id={`carousel__item-${index}`}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
            >
              <CarouselItemTitle>
                {item.year}
                <CarouselItemImg
                  width="208"
                  height="6"
                  viewBox="0 0 208 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 3.5C2.5 2.39543 3.39543 1.5 4.5 1.5H203.5C204.605 1.5 205.5 2.39543 205.5 3.5C205.5 4.60457 204.605 5.5 203.5 5.5H4.5C3.39543 5.5 2.5 4.60457 2.5 3.5Z"
                    fill="url(#paint0_linear)"
                    fillOpacity="0.33"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="2.5"
                      y1="3"
                      x2="205.5"
                      y2="3"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset="0.79478" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </CarouselItemImg>
              </CarouselItemTitle>
              <CarouselItemText>{item.text}</CarouselItemText>
            </CarouselItem>
          </CarouselMobileScrollNode>
        ))}
      </CarouselContainer>

      {/* Carousel Buttons */}
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem === index} />
          </CarouselButton>
        ))}
      </CarouselButtons>
      <SectionDivider />
    </Section>
  );
};

export default Timeline;
