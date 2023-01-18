import React from 'react'
import banner from '../assets/BANNER DESIGN/AH_BANNERFULL.png'
import saffronBox from '../assets/images/saffron_box.png';

const Products = () => {
    return (
        <div className='mt-12' id="products">
            <div className='flex items-center justify-center'>
                <h4 align="center" className='text-3xl font-bold'>
                    Products
                    <br /> -
                </h4>
            </div>
            {/* desktop */}
            <div className='flex-col md:flex '>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <div align="center" className="hidden col-span-1 m-auto text-center md:flex " >
                        <p className='p-0 m-auto text-3xl font-normal tracking-wider text-center '>
                            Asian Harvest&#174; <br />
                            Healthy Cashew Nuts
                        </p>
                    </div>
                    <div >
                        <img src={banner} alt="" className='w-full scale-125 ' />
                    </div>
                    <div className='col-span-1 m-auto text-center lg:hidden'>
                        <p className='p-0 m-auto text-xl font-normal tracking-wider text-center lg:text-3xl '>
                            Asian Harvest&#174; <br />
                            Healthy Cashew Nuts
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 mt-9 '>
                    <div>
                        <img src={saffronBox} alt="" className='w-full p-2 ' />
                    </div>
                    <div className="justify-center col-span-1 m-auto text-center md:flex " >
                        <p className='p-0 m-auto text-xl font-normal tracking-wider lg:text-3xl '>
                            Asian Harvest&#174; <br />
                            Pure Kashmiri & Irani Saffron
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products