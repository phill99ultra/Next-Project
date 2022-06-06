import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import ContactInfo from '../../components/contactInfo';
import { FC } from 'react';
import { contactType } from '../../typescript';

type contactTypeProps = {
  contact: contactType
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      contact: data
    }
  }
}

const Contact:FC<contactTypeProps> = ({ contact }) => {
  return(
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <ContactInfo contact={contact}/>   
    </>
  )
}

export default Contact;