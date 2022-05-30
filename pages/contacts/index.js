import React from 'react';
import Heading from '../../components/heading';
import Head from 'next/head';

const Contacts = () => {
  return(
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text={'Contacts list:'}/>  
    </>
  )
}

export default Contacts;