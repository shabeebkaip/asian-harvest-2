import React from 'react'
import logo from '../assets/images/Logo_new.svg'
import insta from '../assets/images/insta.svg'
import fb from '../assets/images/fb.svg'
import whatsapp from '../assets/images/whatsapp.svg'

const Header = () => {
    console.log('width', window.innerWidth)

    return (
        <div className={`h-screen p-4 bg-white ${window.innerWidth > 768 ? 'header' : 'header-phone'}`} >
            <div className='flex items-center justify-around'>
                <div className='flex'>
                    <img src={logo} alt="logo" className='w-80' />
                </div>
                <div className='flex-1 hidden md:flex' ></div>
                <div className='flex-1 hidden md:flex'>
                    <div className='flex w-full font-semibold'>
                        <p className='px-2' ><a href="#about" >About</a> </p>
                        <p className='px-2' ><a href="#products"> Products</a></p>
                        <p className='px-2' >Contact</p>
                    </div>
                </div>
                <div className='flex-1 hidden md:flex '>
                    <img src={fb} alt="" className='w-10 pl-2 ' />
                    <img src={insta} alt="" className='w-10 pl-2 ' />
                </div>
                <div className='flex'>
                    <a href="https://wa.me/9526750675"  >
                        <img src={whatsapp} alt="" className='w-20 pl-2 ' />
                    </a>

                </div>
            </div>
        </div >
    )
}

export default Header