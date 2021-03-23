import React from 'react';
import { info } from '../../data/dataStore';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <div className={styles.image}>
      <Hero titleText={info.title} image={info.img} />
    </div>
    <div className={styles.description}>
      {info.description}
    </div>
  </Container>
);

export default Info;