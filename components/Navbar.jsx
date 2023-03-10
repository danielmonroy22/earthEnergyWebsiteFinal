import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import LogoImage from '../public/assets/Logo1.png'
// import { useRouter } from 'next/router';
// import NavLogo from '../public/assets/TemporaryLogo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    // const [position, setPosition] = useState('fixed')
    // const router = useRouter();

    // useEffect(() => {
    //   if (
    //     router.asPath === '/property' ||
    //     router.asPath === '/crypto' ||
    //     router.asPath === '/netflix' ||
    //     router.asPath === '/twitch'
    //   ) {
    //     setNavBg('transparent');
    //     setLinkColor('#ecf0f3');
    //   } else {
    //     setNavBg('#ecf0f3');
    //     setLinkColor('#1f2937');
    //   }
    // }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    function handleClick(event) {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        const finalTarget = target.substring(1);
        const element = document.querySelector(finalTarget);
        element.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div
            style={{ backgroundColor: `transparent` }}
            className={
                shadow
                    ? ' w-full h-20 p-10 shadow-xl z-[100] ease-in-out duration-300'
                    : ' w-full h-20 p-10 z-[100]'
            }
        >
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 text-white'>
                <div className='??? md:pt-20 pt-8'>
                    <Link href='/'>

                        <Image
                            src={LogoImage}
                            alt='/'

                            priority


                            className='cursor-pointer md:w-[200px] w-[150px]'
                        />

                    </Link>
                </div>
                <div>
                    <ul style={{ color: `white` }} className='hidden md:flex'>
                        <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>
                            <Link href='/'>Home</Link>
                        </li>
                        <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>
                            <Link href='/#residential' onClick={handleClick}>Residential</Link>
                        </li>
                        <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>
                            <Link href='/#commercial' onClick={handleClick}>Commercial</Link>
                        </li>
                        <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>
                            <Link href='/#about' onClick={handleClick}>About Us</Link>
                        </li>
                        <li className='ml-10 text-sm font-semibold uppercase hover:border-b'>
                            <Link href='/#contact' onClick={handleClick}>Contact Us</Link>
                        </li>

                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNav}
                        className='md:hidden '
                    >
                        <AiOutlineMenu className='text-white' size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav ? 'md:hidden z-50 fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image
                                    src={LogoImage}
                                    alt='/'
                                    width='130'

                                    className='cursor-pointer'
                                />

                            </Link>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose className='text-white' />
                            </div>
                        </div>

                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase '>
                            <Link href='/' >
                                <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                                    Home
                                </li>
                            </Link>

                            <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                                <Link href='/#residential' onClick={handleClick}> Residential      </Link>
                            </li>


                            <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                                <Link href='/#commercial' onClick={handleClick}>   Commercial  </Link>
                            </li>


                            <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                                <Link href='/#about' onClick={handleClick}>   About Us   </Link>
                            </li>


                            <li onClick={() => setNav(false)} className='py-4 text-sm text-white'>
                                <Link href='/#contact' onClick={handleClick}>  Contact Us   </Link>
                            </li>


                        </ul>
                        {/* <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>
                                Let&#39;s Connect
                            </p>
                            {/* <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/danielmonroydev'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/danielmonroy22'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href='/#contact'>
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href='/DanielResume.pdf'>
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div> 
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
