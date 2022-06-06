import React from 'react';
import { FC } from 'react';
import Heading from './heading';

const Footer:FC = () => {
  return(
    <footer>
        <Heading tag={'h3'} text={'Created by Fil'}/>  
    </footer>
  )
}

export default Footer;