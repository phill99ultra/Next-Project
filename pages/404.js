import React from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Heading from '../components/heading';
import styles from '../styles/404.module.scss';

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000)
  }, [router])
  return(
    <div className={styles.wrapper}>
      <Heading text={'404'}/>
      <Heading tag={'h2'} text={'Something is going wrong'}/>                
    </div>
  )
}

export default Error;