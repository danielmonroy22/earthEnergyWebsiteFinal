import React from 'react'
import { sendContactForm } from "../lib/api";
import { useState } from 'react';

import { useToast } from '@chakra-ui/react'

import 'react-toastify/dist/ReactToastify.css';



const ContactUs = () => {

    const [values, setValues] = useState({});
    const toast = useToast()


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await sendContactForm(values);
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            toast({
                title: "Message sent.",
                status: "success",
                duration: 2000,
                position: "top",
            });

        } catch (error) {
            alert("there is an error")
        }

    };
    const handleInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
    };

    return (
        <div id='contact' className='min-h-screen   px-10 md:pb-20  md:px-0'>
            <div className='text-center pt-20 '>
                <h1 className='font-semibold text-4xl pb-5'>Thinking About Going Solar?</h1>
                <h2>Get a quote from one of our hundreds of Earth energy Partner installers.</h2>
            </div>
            <div className='flex  items-center justify-center '>
                <div className='col-span-2 md:w-[50%] w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4 mb-10 md:mb-0'>
                    <div className='p-4'>
                        <form
                            onSubmit={handleSubmit}

                        >
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input
                                        className='border-2 rounded-lg py-1 flex border-gray-300'
                                        type='text'
                                        name='name'
                                        id='name'
                                        onChange={handleInputChange}
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
                                        id='phone'
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input
                                    className='border-2 rounded-lg py-1 flex border-gray-300'
                                    type='email'
                                    name='email'
                                    id='email'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input
                                    className='border-2 rounded-lg py-1 flex border-gray-300'
                                    type='text'
                                    name='subject'
                                    id='subject'
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea
                                    className='border-2 rounded-lg py-1 border-gray-300'
                                    rows='5'
                                    name='message'
                                    id='message'
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>
                            <button type='submit' className='w-full bg-blue-400 p-4 rounded text-white mt-4'>
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