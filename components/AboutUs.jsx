import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faCertificate } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import icon1 from '../public/assets/solar-house.png'
import icon2 from '../public/assets/icon2.png'
import icon3 from '../public/assets/get-money.png'

const AboutUs = () => {
    return (
        <div className='md:min-h-[100vh] min-h-screen w-full  '>
            <div id='about' className=' rounded-xl md:px-20  min-h-[100vh] bg-cover bg-center bg-no-repeat md:bg-cover flex justify-center items-center' style={{ backgroundImage: 'url("../assets/AboutUs1.jpg")' }}>
                <div className=' rounded-xl min-h-[50vh] text-center z-0  aboutUsDiv '>
                    <div className='md:px-10 pt-10 px-0 z-10 '>
                        <div className='px-5 md:px-0' >
                            <h1 className='text-white text-4xl font-semibold text-shadow-xl  '>Leading the way in solar energy solutions</h1>

                        </div>

                        <div className='w-full px-10 md:px-0 gap-10 flex flex-col md:flex-row md:gap-10 md:pt-24 pt-10'>
                            <div className='md:w-[33%] w-full  text-white '>
                                {/* icon */}
                                <div className='w-full h-32  flex justify-center items-center   ' >


                                    <Image
                                        className='h-[100%] w-[30%]'
                                        src={icon1}
                                        alt="Solar Panel Icon"


                                    />

                                </div>
                                {/*text  */}
                                <div className='font-semibold pt-5'>
                                    we provide high-quality solar solutions to help our customers save money and reduce their carbon footprint.


                                </div>
                            </div>
                            <div className='md:w-[33%] w-full text-white'>
                                {/* icon */}
                                <div className='w-full h-32  flex justify-center items-center   ' >


                                    <Image
                                        className='h-[100%] w-[30%]'
                                        src={icon2}
                                        alt="Customer Satisfaction Icon"


                                    />

                                </div>
                                {/*text  */}
                                <div className='font-semibold pt-5'>
                                    We strive for customer satisfaction by designing and implementing custom solar systems that meet our clients' energy needs.


                                </div>
                            </div>
                            <div className='md:w-[33%] w-full text-white mb-24'>
                                {/* icon */}
                                <div className='w-full h-32  flex justify-center items-center   ' >


                                    <Image
                                        className='h-[100%] w-[30%]'
                                        src={icon3}
                                        alt="cost-effective icon"


                                    />

                                </div>
                                {/*text  */}
                                <div className='font-semibold pt-5'>
                                    Earth Energy Solar has a proven track record of delivering cost-effective, reliable solar solutions using advanced technology.


                                </div>
                            </div>


                        </div>




                    </div>


                </div>

            </div>
        </div>
    )
}

export default AboutUs