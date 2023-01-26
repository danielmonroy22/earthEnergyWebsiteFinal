import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer, faCertificate } from '@fortawesome/free-solid-svg-icons'

const AboutUs = () => {
    return (
        <div id='about' className='  min-h-screen bg-cover bg-center bg-no-repeat md:bg-cover' style={{ backgroundImage: 'url("../assets/AboutUs4.jpg")' }}>
            <div className='min-h-screen text-center z-0 bg-[#00000080]  '>
                <div className='md:px-10 pt-10 px-0 z-10 '>
                    <div className='px-5 md:px-0' >
                        <h1 className='text-white text-4xl font-semibold text-shadow-xl  '>Leading the way in solar energy solutions</h1>

                    </div>

                    <div className='w-full px-10 md:px-0  flex flex-col md:flex-row md:gap-10 md:pt-24 pt-10'>
                        <div className='md:w-[33%] w-full  text-white '>
                            {/* icon */}
                            <div className='w-full h-28 p-5 flex justify-center items-center  ' >
                                <FontAwesomeIcon icon={faCertificate} style={{ height: "100%" }} />

                            </div>
                            {/*text  */}
                            <div className='font-semibold'>
                                we provide high-quality solar solutions to help our customers save money and reduce their carbon footprint.


                            </div>
                        </div>
                        <div className='md:w-[33%] w-full text-white'>
                            {/* icon */}
                            <div className='w-full h-28 p-5 flex justify-center items-center  ' >
                                <FontAwesomeIcon icon={faCertificate} style={{ height: "100%" }} />

                            </div>
                            {/*text  */}
                            <div className='font-semibold'>
                                We strive for customer satisfaction by designing and implementing custom solar systems that meet our clients' energy needs.


                            </div>
                        </div>
                        <div className='md:w-[33%] w-full text-white mb-24'>
                            {/* icon */}
                            <div className='w-full h-28 p-5 flex justify-center items-center  ' >
                                <FontAwesomeIcon icon={faCertificate} style={{ height: "100%" }} />

                            </div>
                            {/*text  */}
                            <div className='font-semibold'>
                                Earth Energy Solar has a proven track record of delivering cost-effective, reliable solar solutions using advanced technology.


                            </div>
                        </div>


                    </div>




                </div>


            </div>

        </div>
    )
}

export default AboutUs