import React from 'react'
import pometryLogo from "../assets/image/webp/pometry-logo.png";

const Header = () => {
    return (
        <div className='py-[23px]'>
            <div className="container">
                <nav className='flex items-center justify-between'>
                    <a href="/" className='max-w-[157px] flex'>
                        <img src={pometryLogo} alt="pometryLogo" className='w-full' />
                    </a>
                    <div className="flex flex-row items-center gap-8">
                        <a href="/" className='font-normal text-base text-offBlack opacity-90'>Home</a>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
