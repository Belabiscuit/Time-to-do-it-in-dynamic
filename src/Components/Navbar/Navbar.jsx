import React, { useState } from 'react';
import Link from './Link'
import { MenuIcon, X } from 'lucide-react';

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/"
  },
  {
    id: 2,
    name: "Blogs",
    path: "/blogs"
  },
  {
    id: 3,
    name: "About",
    path: "/about"
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact"
  },
  {
    id: 5,
    name: "Dashboard",
    path: "/dashboard"
  }
];
const Links= navigationData.map((route)=><Link route={route}></Link>)

const Navbar = () => {
    const[open,setOpen] = useState(false)
    return (
    
        <nav className='flex justify-between mx-10 my-3'>
           <span className='flex ' onClick={()=>setOpen(!open)}>
            {
                open ? 
                <X className='mr-2 md:hidden'></X> : 
                <MenuIcon className='mr-2 md:hidden'>
             </MenuIcon>
            }
           
             <ul className='md:hidden '>
                {

                    Links
                }
             </ul>
            <h3>SIFAT</h3>
           </span>
        <ul className='hidden md:flex justify-center'>
            
       {
         Links
       }       
        </ul>
        <button>Sign In</button>
        </nav>
       
    );
};

export default Navbar;