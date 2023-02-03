import React from 'react'
import emblems from '../assets/2_emblems.svg'

const AboutUs = () => {
    return (
        <div className='mt-12' id="about">
            <div className='flex items-center justify-center'>
                <h4 align="center" className='text-3xl font-bold '>About us
                    <br />
                    -
                </h4>
            </div>
            <div className='flex items-center justify-center mt-4'>
                <p className='text-3xl font-normal tracking-wide' align="center">
                    It's not about just a Cashew, It's all <br /> about the <span className='text-[#82bc64]'>healthy products.!</span>
                </p>
            </div>
            <div className='flex items-center justify-center mt-4'>
                <img src={emblems} alt="emblems" className='w-40' />
            </div>
            <div className='flex items-center justify-center mt-4'>
                <h4 className='text-lg font-bold tracking-wide'>Harvest. Process. Produce  </h4>
            </div>
            <div className='flex items-center justify-center p-2 mt-4 '>
                <p className='text-lg tracking-wide  ' align="center" >Sailing from Kollam, the eponymous city, the cashew capital of world  exporting Lakhs of tonnes to USA, <br />
                    Japan, Saudi Arabia etc we marked our presence two decades back. We understood that <br /> our people,
                    despite being in a cashew hub are not getting the export quality <br />
                    premium Cashew nuts. So they went for what was cheap.
                </p>
            </div>
            <div className='flex items-center justify-center mt-4 '>
                <p className='text-lg font-normal tracking-wide ' align="center" >So we decided to serve our people the premium healthy nuts for what they can afford. <br />
                    We will serve you only the best. We value your Health as we know for sure that your health is our wealth.
                </p>
            </div>
        </div>
    )
}

export default AboutUs