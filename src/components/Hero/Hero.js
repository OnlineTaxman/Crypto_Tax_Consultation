import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Are you looking for a <br />
          Crypto Tax Professional? 
        </SectionTitle>
        <SectionText>
        My interest in Blockchain technology led me to specialize in cryptocurrency taxes to help with your tax filings. If you are looking for someone who can handle both your crypto taxes and your regular tax return preparation, you have come to the right place.
        </SectionText>
        <Button onClick={()=> window.location = 'https://koalendar.com/e/meet-with-ignacio'}>Free Consultation</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;