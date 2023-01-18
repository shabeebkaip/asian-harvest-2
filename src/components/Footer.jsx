import React from 'react'
import AH_Footer_logo from '../assets/AH_Footer_logo-01.svg'
import instagram from '../assets/instagram_c.png';
import facebook from '../assets/facebook_c.png';
import AH_Footer_tagline from '../assets/AH_Footer_tagline.png'

const Footer = () => {
    return (
        <footer className='p-5 text-white bg-black ' >
            <div className='flex flex-col items-center justify-between md:flex-row '>
                <div className="mr-5">
                    <img src={AH_Footer_logo} alt="footer_logo" className='w-40 md:w-80' />
                </div>
                <div className='flex flex-col items-center justify-center gap-2 mt-4 md:justify-start md:items-start md:mt-0 '>
                    <h4 className='uppercase'>Follow Us On</h4>
                    <div className='flex flex-col justify-center gap-2' >
                        <div className='flex justify-center gap-1 md:justify-start' >
                            <img src={instagram} alt="instagram" width={35} />
                            <img src={facebook} alt="instagram" width={35} />
                        </div>
                        <div className='flex justify-center '>
                            <p>&#169; Asian Harvest LLP 2023 <br />
                                All rights reserved
                            </p>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col justify-start gap-2 '>
                    <h4 className='uppercase'>Asian Harvest LLp</h4>
                    <div className='flex flex-col gap-1 font-thin' >
                        <p>Chathinamkulam, Chandanathope, <br />
                            Kollam - 14, Kerala, India. <br />
                            <br />
                            <span className='font-normal duration-100 cursor-pointer'><a href=""></a> mail@asianharvest.in</span>
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={AH_Footer_tagline} alt="" />
                    </div>
                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </footer>
    )
}

export default Footer