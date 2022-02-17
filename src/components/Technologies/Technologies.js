import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Services</SectionTitle>
    <SectionText>
    During the consultation we assess your tax situation and will provide you with a quote. Our transparent, fixed fee pricing means you won’t have any surprises.
    Our experienced accountants prepare your US tax return, so you don’t have to dig through the details of tax laws that apply to your specific international situation.
    If the IRS has questions about your return, we’re there for you and will handle the correspondence with the IRS.
    </SectionText>
    <List>
      <ListItem>
        <picture>
         </picture>
        <ListContainer>
          <ListTitle>We Specialize in Crypto Taxation</ListTitle>
          <ListParagraph>
            We have helped thousands of  taxpayers to stay in tax compliance with crypto while optimizing their tax situation. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Crypto Tax Compliance</ListTitle>
          <ListParagraph>
            We can help you navigate US tax requirements and file all necessary forms. 
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
        </picture>
        <ListContainer>
          <ListTitle>Foreign Assets Reporting</ListTitle>
          <ListParagraph>
            Foreign exchanges have to be reported if they reach certain thresholds. Failure to do so can result in severe fines.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
