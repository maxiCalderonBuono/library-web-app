import React from 'react'
import Navbar from './Navbar'
import HeaderContain from './HeaderContain'

const Header = ({cartItems}) => {
    return ( 
    <header>
        <Navbar cartItems= {cartItems}/>
        <HeaderContain/>
    </header>
    )}

export default Header

