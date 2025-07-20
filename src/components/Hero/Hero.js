import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I am Prince Raj <br/> Aspiring Data Analyst with an Engineering Edge
      </SectionTitle>
      <SectionText>
      I'm driven by data, obsessed with insights, and passionate about solving real-world problems using analytics.
      With a foundation in Civil Engineering, I bring a structured, logical approach to data - blending technical understanding with analytical curiosity.Welcome to my portfolio - where numbers
tell stories, and decisions are data-driven.        
      </SectionText>
      <Button onClick={()=> window.location = "https://princeraj6095@gmail.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;