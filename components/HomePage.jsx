import React from 'react'
import Navbar from 'components/Navbar';
import styled from '@emotion/styled';
import bg from '../public/assets/HomePage4.jpg'
import Image from 'next/image';

import { FaSolarPanel, GiMoneyStack } from 'react-icons/fa';









// const MyDiv = styled.div`
//     background-image: url(${bg.src});





// `;

const HomePage = () => {
    return (


        <div className='h-screen shadow-xl mainDiv  ' >
            <Image
                className='h-screen z-[-1]'
                src={bg}
                alt="Pexels"
                layout='fill'
                objectFit='cover'
                objectPosition='center'
            />
            <div className='bg-[#00000080] w-full h-full align-bottom opacity '>




                <Navbar />

                <div className='h-[85%] flex items-center flex-col justify-between '>

                    <div className='text-white text-center    text-4xl  mt-44 Slogan md:text-4xl md:p-0 '>

                        <h1 className='font-semibold  px-10 py-5'> Bringing sunshine to your life and home </h1>





                    </div>
                    <div className='flex flex-col gap-0 text-white md:gap-10 md:flex-row  '>
                        <div className='icons and text flex md:gap-10 px-10 md:px-0'>


                            <div className='h-16 flex flex-col items-center justify-center gap-0 md:gap-2'>
                                <div className=' items-center flex justify-center pb-5 md:pb-0'>
                                    <FaSolarPanel />
                                </div>

                                <div class="description text-center">
                                    Convert Sunlight to Energy
                                </div>


                            </div>
                            <div className='h-16 flex flex-col items-center justify-center gap-0 md:gap-2'>
                                <div className=' items-center flex justify-center pb-5 md:pb-0'>
                                    <FaSolarPanel />
                                </div>

                                <div class="description text-center">
                                    Convert Sunlight to Energy
                                </div>
                            </div>
                            <div className='h-16 flex flex-col items-center justify-center gap-0 md:gap-2'>
                                <div className=' items-center flex justify-center pb-4 md:pb-0'>

                                    24/7
                                </div>

                                <div class="description text-center">
                                    Convert Sunlight to Energy
                                </div>
                            </div>
                        </div>
                        <div className='md:w-auto w-full    flex justify-center items-center mt-10 md:mt-0' >
                            <button class="relative inline-flex items-center justify-center  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white text-black rounded-md group-hover:bg-opacity-0">
                                    Order Now
                                </span>
                            </button>


                        </div>



                    </div>
                </div>

            </div>


        </div>






    )
}

export default HomePage