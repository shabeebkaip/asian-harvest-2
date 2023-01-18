import React from 'react'
import productBack from '../assets/BANNER DESIGN/AH_BANNER_CASHEWpack.png'
import AH_spooncashew from '../assets/AH_spooncashew.png'

const ContactUs = () => {
    return (
        <div className='p-12 mt-12' id="contact_us">
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <div className='flex justify-start'>
                        <h4 className='text-3xl font-bold'>
                            Contact Us
                            <br /> -
                        </h4>
                    </div>
                    <div className='mt-9'>
                        <div className='flex justify-start '>
                            <h4 className='text-2xl font-normal'>Please get in Touch Via Phone: </h4>
                        </div>
                        <div className='flex justify-start mt-4'>
                            <h4 className='text-2xl font-semibold'>+91 9961 343 770</h4>
                        </div>
                        <div className='flex justify-start mt-1'>
                            <h4 className='text-2xl font-semibold'>+91 9633 693 339</h4>
                        </div>
                    </div>
                    <div className='mt-9'>
                        <div className='flex justify-start '>
                            <h4 className='text-2xl font-normal'>Or Email us using the form below: </h4>
                        </div>
                    </div>
                    <div className='mt-9'>
                        <div className='w-full '>
                            <form className="form" >
                                <div className="flex flex-col">
                                    <label for="name" className="m-1 font-normal">Name <span className='text-[#a0a0a0] font-light text-sm ml-1 '>Required</span></label>
                                    <input type="text" className="w-full p-4 border border-[#82bc64] rounded-lg" id="name" required />
                                </div>
                                <div className="mt-4">
                                    <label for="email" className="m-1 font-normal">Email <span className='text-[#a0a0a0] font-light text-sm ml-1 ' >Required</span></label>
                                    <input type="text" className="w-full p-4 border border-[#82bc64] rounded-lg" id="email" required />
                                </div>
                                <div className="mt-4">
                                    <label for="email" className="m-1 font-normal">Subject </label>
                                    <input type="text" className="w-full p-4 border border-[#82bc64] rounded-lg" id="email" required />
                                </div>
                                <div className="mt-4">
                                    <label for="email" className="m-1 font-normal">Message <span className='text-[#a0a0a0] font-light text-sm ml-1 ' >Required</span></label>
                                    <textarea type="text" className="w-full p-4 border border-[#82bc64] rounded-lg" id="email" required />
                                </div>
                                <div class="form__group" style={{ marginTop: '20px' }}>
                                    <button className='p-3 font-bold text-white bg-black rounded-lg'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='flex-col hidden lg:flex'>
                    <img src={productBack} alt="" className='w-full' />
                    <img src={AH_spooncashew} alt="" className='xl:hidden' />
                </div>
            </div>
        </div>
    )
}

export default ContactUs