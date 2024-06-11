import Link from 'next/link';
import React from 'react';
import { NAV_LINKS } from '@/constants';
import Button from './Button';


const Navbar = () => {

  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
     <Link href="/">
          <h1 className="font-bold text-blue-800 text-2xl">
          Unboxedkart
          </h1>
     </Link>
     
     <ul className='hidden h-full gap-12 lg:flex'>
          {NAV_LINKS.map((link) => (
               <Link href={link.href} key={link.key} className='regular-16 text-blue-500 flexCenter cursor-pointer pb-1.5 transition-all hover:underline hover:decoration-2 hover:text-blue-800'>
                    {link.label}
               </Link>
          ))}
     </ul>
     <div className='lg:flexCenter hidden'>
          <Button type="button" title="Shop" icon="cart.svg" variant="btn_blue"/>
     </div>
     <div className='lg:hidden'>
          <Button type="button" title="Menu" icon="menu.svg" variant="btn_blue"/>
     </div>
    </nav>
  )
}

export default Navbar
