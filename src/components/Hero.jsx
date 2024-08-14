import React from 'react'
import Header from './Header';
import circle from "../assets/image/webp/circle.png";
import timer from "../assets/image/webp/timer.png";
import { SOCIAL_ICONS } from '../common/Helper';
import CommonParagraph from '../common/CommonParagraph';
import Icons from '../common/Icons';

const Hero = () => {
    return (
        <div className='xl:pb-24 lg:pb-16 pb-4 overflow-hidden relative'>
            <Header />
            <div className="container pt-5 lg:pt-10">
                <div className="mt-12 flex flex-col items-center lg:flex-row">
                    <div className="lg:w-1/2 w-full flex justify-center items-center">
                        <div className="relative max-w-[338px] w-full mx-8">
                            <img src={circle} alt="circle" className='w-full' />
                            <a href="/" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[143px] w-[100px] h-[100px] sm:h-[143px] shadow-4xl rounded-full grid place-items-center hover:shadow-darkRed duration-300 ease-linear hover:shadow-3xl'>
                                <img src={timer} alt="timer" className='sm:w-[64px] w-9' />
                            </a>
                            {SOCIAL_ICONS.map((i) => (
                                <a key={i} href={i.link} className={`${i.className} grid place-items-center bg-white sm:w-[74px] w-16 h-16 sm:h-[74px] shadow-4xl rounded-full hover:shadow-darkRed duration-300 ease-linear hover:shadow-3xl absolute`}>
                                    <img src={i.icon} alt={i.icon} className='sm:w-[41px] w-8' />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex justify-center mt-20 items-center">
                        <div className="max-w-[509px] w-full relative">
                            <h2 className='font-bold text-center lg:text-left md:text-custom-3xl sm:text-5xl text-4xl text-offBlack capitalize'>raphtory</h2>
                            <Icons IconName="arrowIcon" className="absolute lg:right-[104px] -top-9 right-9 lg:-top-1.5 hidden sm:flex" />
                            <CommonParagraph className="text-black text-center mt-3 lg:text-left" text="Raphtory is an open-source platform for distributed real-time temporal graph analytics, allowing you to load and process large dynamic datasets across time." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
