import React from 'react'
import Navbar from 'components/Navbar';
import styled from '@emotion/styled';
import bg from '../public/assets/HomePage2.jpg'
import homePageIcon from '../public/assets/discount.png'
import Image from 'next/image';
import Link from 'next/link';
import PhoneIcon from '../public/assets/phone-call.png'
import emailIcon from '../public/assets/email1.png'
import mapsIcon from '../public/assets/google-maps.png'

import { FaSolarPanel, GiMoneyStack, FaHandHoldingUsd } from 'react-icons/fa';









// const MyDiv = styled.div`
//     background-image: url(${bg.src});





// `;

const HomePage = () => {
    function handleClick(event) {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        const finalTarget = target.substring(1);
        const element = document.querySelector(finalTarget);
        element.scrollIntoView({ behavior: 'smooth' });
    }
    return (


        <div className='h-screen shadow-xl mainDiv bg-cover bg-center bg-no-repeat md:bg-cover ' style={{ backgroundImage: "url('../assets/HomePage2.jpg')" }} >
            {/* <Image
                className='z-[-1]'
                src={bg}
                alt="Pexels"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            /> */}
            <div className='bg-[#00000080] w-full h-full align-bottom opacity '  >




                <Navbar />

                <div className='h-[85%] flex items-center flex-col justify-between '>

                    <div className='text-white text-center   text-3xl lg:text-4xl  mt-44 Slogan md:text-4xl md:p-0 '>

                        <h1 className='font-semibold  px-10 py-5 '> Save Up to 40% on your electric bill </h1>
                        <div className='md:w-auto w-full    flex justify-center items-center mt-10 md:mt-0' >
                            <a href='#contact'>
                                <button class="relative inline-flex items-center justify-center  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500   dark:text-white">
                                    <span class="text-xl relative px-10 py-2.5 transform hover:bg-blue-600 transition duration-500 hover:scale-125 text-white rounded-md ">

                                        Get a Quote



                                    </span>
                                </button>

                            </a>
                        </div>





                    </div>
                    <div className='flex flex-col gap-10 text-white md:gap-10 md:flex-row  '>
                        <div className='icons and text flex md:gap-10 px-10 md:px-0'>


                            <div className='h-16 flex flex-col items-center justify-center gap-0 md:gap-2'>

                                <div className='  md:text-3xl text-2xl items-center flex justify-center pb-5 md:pb-0'>
                                    <FaSolarPanel />
                                </div>

                                <div class="description text-center font-semibold">
                                    Convert Sunlight to Energy
                                </div>

                            </div>
                            <div className='h-16 flex flex-col items-center justify-center gap-0 md:gap-2'>


                                <div className=' md:text-3xl text-3xl items-center flex justify-center pb-5 md:pb-0'>
                                    <FaHandHoldingUsd />
                                </div>

                                <div class="description text-center font-semibold">
                                    Value Priced, Quality Assured
                                </div>
                            </div>
                            <div className='h-16 flex flex-col items-center justify-center gap-0 md:gap-2'>
                                <div className=' md:text-2xl text-2xl items-center flex justify-center pb-4 md:pb-0'>

                                    24/7
                                </div>

                                <div class="description text-center font-semibold">
                                    Solar Solutions, Always On
                                </div>
                            </div>
                        </div>
                        <div className='md:w-auto w-full  h-28 gap-7 bg-red-500    flex justify-center items-center mt-10 md:mt-0' >

                            <div className='  md:w-[24%] md:h-[100px] cursor-pointer'>
                                <a href="mailto: earthenergy@gmail.com" >
                                    <Image src={emailIcon} className="w-full md:h-10 h-5" >

                                    </Image>
                                </a>
                            </div>


                            <div className=' md:h-[100px] md:w-[24%] cursor-pointer'>
                                <a href="Tel: +1(773) 733-9675" >
                                    <Image src={PhoneIcon} className="w-full h-10" >

                                    </Image>
                                </a>
                            </div>

                            <div className=' md:h-[100px] md:w-[24%] cursor-pointer'>
                                <a href='https://goo.gl/maps/Rzz3ii4jvgnaTTQ86'>
                                    <Image src={mapsIcon} className="w-full h-10" ></Image>
                                </a>
                            </div>



                        </div>





                    </div>
                </div>

            </div>


        </div >






    )
}

export default HomePage