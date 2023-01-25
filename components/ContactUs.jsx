import React from 'react'

const ContactUs = () => {
    return (
        <div className='h-screen'>
            <div className='text-center pt-20 '>
                <h1 className='font-semibold text-4xl pb-5'>Thinking About Going Solar?</h1>
                <h2>Get a quote from one of our hundreds of Earth energy Partner installers.</h2>
            </div>
            <div className='flex  items-center justify-center '>
                <div className='col-span-2 md:w-[50%] w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form
                        // action='https://getform.io/f/b04a82a4-9baf-45aa-aad7-5c0305de5705'
                        // method='POST'
                        // encType='multipart/form-data'
                        >
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input
                                        className='border-2 rounded-lg py-1 flex border-gray-300'
                                        type='text'
                                        name='name'
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>
                                        Phone Number
                                    </label>
                                    <input
                                        className='border-2 rounded-lg py-1 flex border-gray-300'
                                        type='text'
                                        name='phone'
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input
                                    className='border-2 rounded-lg py-1 flex border-gray-300'
                                    type='email'
                                    name='email'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input
                                    className='border-2 rounded-lg py-1 flex border-gray-300'
                                    type='text'
                                    name='subject'
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea
                                    className='border-2 rounded-lg py-1 border-gray-300'
                                    rows='5'
                                    name='message'
                                ></textarea>
                            </div>
                            <button className='w-full bg-blue-400 p-4 rounded text-white mt-4'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>


            </div>



        </div>
    )
}

export default ContactUs