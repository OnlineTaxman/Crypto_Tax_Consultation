import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Tax Professionals'},
  { number: 700, text: 'Monthly Consultations', },
  { number: 500, text: 'Monthly Engagements', },
  { number: 5000, text: 'Happy Clients!', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Team Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
