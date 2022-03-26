import Link from 'next/link';
import { useState } from 'react';
import Logo from '../public/bobapalsLogo.png';
import Image from 'next/image';
import styles from '../styles/navbar.module.css'
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";


export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

  return (
    <div className={styles.yomama}>
      <nav className={`${styles.nav} flex items-center flex-wrap bg-blue-400 p-3`}>
        <Link href='/'>
          <a className={`${styles.logo} inline-flex items-center p-2 mr-4`}>
            <Image src={require('../public/bobapalsLogo.png')} alt="logo" width="200" height="48"/>
          </a>
        </Link>
        <button onClick={handleClick} className=' inline-flex p-3 hover:bg-blue-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div className={styles.dropdown}>
          {active && (<div className={`${styles.mobileLink} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <ScrollLink to='about' smooth>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                  About
                </a>
              </ScrollLink>
              <ScrollLink to='team' smooth>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  Team
                </a>
              </ScrollLink>
              <ScrollLink to='roadmap' smooth>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  Roadmap
                </a>
              </ScrollLink>
            </div>
          </div>)}
        </div>
        <div className={`${styles.desktopLink} w-full lg:inline-flex lg:flex-grow lg:w-auto`}>
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
              <ScrollLink to='about' smooth>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>
                  About
                </a>
              </ScrollLink>
              <ScrollLink to='team' smooth>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  Team
                </a>
              </ScrollLink>
              <ScrollLink to='roadmap' smooth>
                <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                  Roadmap
                </a>
              </ScrollLink>
          </div>
        </div>
      </nav>
    </div>
  );
};