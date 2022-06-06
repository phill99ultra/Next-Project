import React from 'react';
import Head from 'next/head';
import Heading from '../components/heading';

const Posts = () => {
  return(
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text={'Post List'}/>
      <Heading tag={'p'} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th"}/>     
    </>
  )
}

export default Posts;