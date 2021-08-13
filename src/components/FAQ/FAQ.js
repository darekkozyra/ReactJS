import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {settings, listData, pageContents} from '../../data/dataStore';

class FAQ extends React.Component{

  render(){
    return(
      <Container>
        <Hero titleText={listData.title} image={listData.image} />
        <h2>{settings.navLinksHeaders.faq}</h2>
        <p>{pageContents.FAQ.textFAQ}</p>
      </Container>
    );
  }
}

export default FAQ;