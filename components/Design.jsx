import React from 'react'

const Design = () => {
    return (
        <>

            <div id='commercial' className='papa min-h-screen  flex flex-col  md:flex-row  '>

                <div className="w-[100%] md:w-[70%] h-[500px] md:h-screen  bg-cover bg-center bg-no-repeat md:bg-cover" style={{ backgroundImage: 'url("../assets/Comercial1.jpg")' }} />

                <div className=' md:w-[30%] w-full md:h-screen h-[50%] flex flex-col justify-between '>
                    <div className='p-10'>
                        <h1 className="text-3xl font-medium ">Sleek and Durable</h1>
                        <p className='font-normal mt-10'>Our solar panels are low-profile and durable — quietly converting sunlight to energy for decades to come. Integrated hardware and simple design achieve this by securing the panels close to your roof and to each other for a minimalist aesthetic.</p>
                    </div>
                    <div className='mb-10  pl-10 '>
                        <a href='#contact'>
                            <button class="relative inline-flex items-center justify-center  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span class="relative px-10 py-2.5 transition-all ease-in duration-75  text-white rounded-md group-hover:bg-opacity-0">
                                    CONTACT US
                                </span>
                            </button>
                        </a>

                    </div>
                </div>


            </div>




        </>
    )
}

export default Design