import React from 'react'
import { FC, ReactNode } from 'react';
import Header from "./header";
import Footer from "./footer";

type layoutProps = {
    children: ReactNode
}

const Layout:FC<layoutProps> = ({children}) => {
    return(
        <>
            <Header/>
                {children}
            <Footer/>
        </>
    )   
}

export default Layout;