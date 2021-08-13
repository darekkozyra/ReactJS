import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { listData, pageContents, settings } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={pageContents.info.title} image={listData.image}/>
    <h2>{settings.navLinksHeaders.info}</h2>
    <p>{pageContents.info.textInfo}</p>    
  </Container>
);

export default Info;
