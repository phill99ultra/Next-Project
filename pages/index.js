import React from 'react';
import Heading from '../components/heading';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return(
    <div className={styles.wrapper}>
      <Heading text={'Next JS Application'}/>    
    </div>
  )
}

export default Home;