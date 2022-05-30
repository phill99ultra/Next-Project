import React from 'react';
import Heading from '../components/heading';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

const Home = () => {
  return(
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text={'Next JS Application'}/>    
    </div>
  )
}

export default Home;