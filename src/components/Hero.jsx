import React from 'react'
import Header from './Header';
import circle from "../assets/image/webp/circle.png";
import timer from "../assets/image/webp/timer.png";
import { SOCIAL_ICONS } from '../common/Helper';
import CommonParagraph from '../common/CommonParagraph';
import Icons from '../common/Icons';

const Hero = () => {
    return (
        <div>
            <Header />
            <div className="container pt-10">
                <div className="mt-12 flex flex-row">
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="relative max-w-[338px] w-full">
                            <img src={circle} alt="circle" className='w-full' />
                            <a href="/" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[143px] h-[143px] shadow-4xl rounded-full grid place-items-center hover:shadow-darkRed duration-300 ease-linear hover:shadow-3xl'>
                                <img src={timer} alt="timer" className='w-[64px]' />
                            </a>
                            {SOCIAL_ICONS.map((i) => (
                                <a key={i} href={i.link} className={`${i.className} grid place-items-center bg-white w-[74px] h-[74px] shadow-4xl rounded-full hover:shadow-darkRed duration-300 ease-linear hover:shadow-3xl absolute`}>
                                    <img src={i.icon} alt={i.icon} className='w-[41px]' />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center">
                        <div className="max-w-[509px] w-full relative">
                            <h2 className='font-bold text-custom-3xl text-offBlack capitalize'>raphtory</h2>
                            <Icons IconName="ArrowIcon" className="absolute right-[104px] -top-1.5" />
                            <CommonParagraph className="text-black" text="Raphtory is an open-source platform for distributed real-time temporal graph analytics, allowing you to load and process large dynamic datasets across time." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
