import React from 'react'

const Savings = () => {
    return (
        <>
            <div id="residential" className='papa h-screen flex flex-col-reverse  md:flex-row  '>
                <div className=' md:w-[30%] w-full md:h-screen h-[50%] flex flex-col justify-between '>
                    <div className='p-10'>
                        <h1 className="text-3xl font-medium ">Electricity For Less</h1>
                        <p className='font-nor,al mt-10'>Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Earth Energy price match guarantee and take control of your monthly electricity bill.</p>
                    </div>
                    <div className='mb-10  pl-10 '>
                        <a href='#contact'>
                            <button class="relative inline-flex items-center justify-center  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span class="relative px-10 py-2.5 transition-all ease-in duration-75 text-white  rounded-md group-hover:bg-opacity-0">
                                    CONTACT US
                                </span>
                            </button>
                        </a>

                    </div>
                </div>
                <div className="w-[100%] md:w-[70%] h-[500px] md:h-screen  bg-cover bg-center bg-no-repeat md:bg-cover" style={{ backgroundImage: "url('../assets/Design1.jpg')" }} />




            </div>




        </>
    )
}

export default Savings