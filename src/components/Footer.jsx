import React from 'react'
import AH_Footer_logo from '../assets/AH_Footer_logo-01.svg'
import instagram from '../assets/instagram_c.png';
import facebook from '../assets/facebook_c.png';
import AH_Footer_tagline from '../assets/AH_Footer_tagline.png'

const Footer = () => {
    return (
        <div className="#Footer">
            <div className="hidden md:flex flex-col items-center justify-between md:flex-row border-1 bg-black text-white   ">
                <div className="mr-5">
                    <img src={AH_Footer_logo} alt="footer_logo" className="w-40 md:w-80" />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 mt-4 md:justify-start md:items-start md:mt-0 ">
                    <h4 className="uppercase">Follow Us On</h4>
                    <div className="flex flex-col justify-center gap-2">
                        <div className="flex justify-center gap-1 md:justify-start">
                            <a href="https://instagram.com/asian.harvest?igshid=Yzg5MTU1MDY=">
                                <img src={instagram} alt="instagram" width={35} />
                            </a>

                            <img src={facebook} alt="facebook" width={35} />
                        </div>

                        <div className="hidden md:flex   md:justify-center ">
                            <p>
                                &#169; Naturepark 2023 <br />
                                All rights reserved
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" hidden md:flex flex-col justify-start gap-2 ">
                    <h4 className="uppercase">Asian Harvest LLp</h4>
                    <div className="flex flex-col gap-1 font-normal">

                        <p>Chathinamkulam, Chandanathope, <br />
                            Kollam - 14, Kerala, India. <br />
                            <br />
                            <span className="font-normal duration-100 cursor-pointer">
                                <a href="/"></a>mail@sales@Asian Harvest LLp.in
                            </span>
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={AH_Footer_tagline} alt="logomark" />
                    </div>
                </div>
            </div>
            {/* phone */}

            <div
                align="center  "
                className=" md:hidden flex flex-col items-center justify-between md:flex-row border-1 gap-4 bg-black text-white">
                <div className="mr-5">
                    <img src={AH_Footer_logo} alt="footer_logo" className="w-40 md:w-80" />
                </div>
                <div className="flex flex-col items-center justify-center gap-8  md:justify-start md:items-start md:mt-0 ">
                    <h4 className="uppercase ">Follow Us On</h4>
                    <div className="flex flex-col justify-center  ">
                        <div className="flex justify-center gap-4 md:justify-start">
                            <a href="https://instagram.com/asian.harvest?igshid=Yzg5MTU1MDY=">
                                <img src={instagram} alt="instagram" width={35} />
                            </a>

                            <img src={facebook} alt="facebook" width={35} />
                        </div>
                    </div>
                </div>
                <div className="  flex-col justify-start  ">
                    <h4 className="uppercase">Asian Harvest LLp</h4>
                    <div className="flex flex-col gap-1 font-normal">
                        <p>Chathinamkulam, Chandanathope, <br />
                            Kollam - 14, Kerala, India. <br />
                            <br />
                            <span className="font-normal duration-100 cursor-pointer">
                                <a href="/"></a> mail@sales@Asian Harvest LLp.in
                            </span>
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={AH_Footer_tagline} alt="logomark" />
                    </div>
                </div>
                <div className=" md:hidden flex justify-center mb-3 ">
                    <p>&#169; Asian Harvest LLP 2023 All rights reserved</p>
                </div>
            </div>


        </div>
    );
};


export default Footer

