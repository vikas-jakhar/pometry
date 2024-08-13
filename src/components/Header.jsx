import React from 'react'
import pometryLogo from "../assets/image/webp/pometry-logo.png";
import { NAV_ITEMS_DATA } from '../common/Helper';
import CommonButton from '../common/CommonButton';

const Header = () => {
    return (
        <div className='py-[23px]'>
            <div className="container">
                <nav className='flex items-center justify-between'>
                    <a href="/" className='max-w-[157px] flex'>
                        <img src={pometryLogo} alt="pometryLogo" className='w-full' />
                    </a>
                    <div className="flex flex-row items-center gap-8">
                        {NAV_ITEMS_DATA.map((i) => (
                            <a key={i} href="/" className='font-normal text-base text-offBlack opacity-90 duration-300 ease-linear hover:bg-darkRed-gradient hover:text-transparent hover:bg-clip-text after:[] after:absolute after:bg-darkRed-gradient after:h-px after:w-0 after:right-0 after:bottom-0 after:rounded after:duration-300 after:ease-linear hover:after:w-full hover:after:right-auto hover:after:left-0 relative'>{i.text}</a>
                        ))}
                    </div>
                    <CommonButton text="Start Building" className="border-darkRed text-darkRed hover:text-white hover:border-transparent hover:shadow-darkRed" hoverClass="bg-darkRed-gradient" />
                </nav>
            </div>
        </div>
    )
}

export default Header
