import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { FaHtml5, FaReact, FaNodeJs, FaAws, FaGitAlt } from 'react-icons/fa';
import {SiJupyter, SiVisualstudiocode, SiPowerbi, SiAutodesk, SiFigma, SiPython,} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
  <SectionDivider/>
  <br/>

  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
  I’ve worked with a diverse range of technologies, blending my civil engineering background with a strong passion for data. From analyzing data using Python, Pandas, and Power BI to building web dashboards with React and Next.js, I focus on turning numbers into insights. I'm also comfortable with SQL, Git, and tools like Excel for data-driven decision-making.
  </SectionText>
  <List>
    <ListItem>
      <SiPython size="3rem"/>
      <ListContainer>
        <ListTitle>Languages</ListTitle>
        <ListParagraph>
          Experience with <br/>
          Python, SQL
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <SiJupyter size="3rem"/>
      <ListContainer>
        <ListTitle>Data Analysis & ML</ListTitle>
        <ListParagraph>
          Pandas, NumPy, Matplotlib, Scikit-Learn
        </ListParagraph>
      </ListContainer>
    </ListItem><ListItem>
      <SiPowerbi size="3rem"/>
      <ListContainer>
        <ListTitle>BI Tools</ListTitle>
        <ListParagraph>
          Power BI, MS Excel
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <FaHtml5 size="3rem"/>
      <ListContainer>
        <ListTitle>Web</ListTitle>
        <ListParagraph>
          Experience with <br/>
          HTML, React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <SiAutodesk size="3rem"/>
      <ListContainer>
        <ListTitle>Civil Engineering Tools</ListTitle>
        <ListParagraph>
          Experience with <br/>
          AutoCAD, STAAD Pro
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <SiVisualstudiocode size="3rem"/>
      <ListContainer>
        <ListTitle>Others</ListTitle>
        <ListParagraph>
          Data Visualization, Statistical Analysis, Dashboarding, Data Cleaning
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  <SectionDivider/>
  </Section>
);

export default Technologies;
