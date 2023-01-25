import React from 'react'
import Navbar from 'components/Navbar';
import styled from '@emotion/styled';

import { FaSolarPanel, GiMoneyStack } from 'react-icons/fa';









const MyDiv = styled.div`
    background-image: url('../assets/HomePage1.jpg');
    background-color: black;
    
  
  
 

`;

const HomePage = () => {
    return (


        <MyDiv className='h-screen shadow-xl bg-cover bg-center bg-no-repeat md:bg-cover  ' >
            <div className='bg-gradient-to-t from-black via-transparent to-transparent w-full h-full align-bottom opacity '>



                <Navbar />

                <div className='h-[85%] flex items-center flex-col justify-between  '>

                    <div className='text-white text-center font-medium text-4xl p-10 mt-44 Slogan md:text-4xl md:p-0 '>
                        <h1>  Powering a brighter future with solar energy </h1>


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
                                <span class="relative px-10 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    Order Now
                                </span>
                            </button>


                        </div>



                    </div>
                </div>

            </div>


        </MyDiv>






    )
}

export default HomePage