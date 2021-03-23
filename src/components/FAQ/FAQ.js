import React from 'react';
import { faq } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import ReactHtmlParser from 'react-html-parser';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <div className={styles.image}>
      <Hero titleText={faq.title} image={faq.img} />
    </div>
    <div className={styles.description}>
      {ReactHtmlParser(faq.description)}
    </div>
  </Container>
);

export default FAQ;