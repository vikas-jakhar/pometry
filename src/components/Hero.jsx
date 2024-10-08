import React from 'react'
import Header from '../common/Header';
import circleImg from "../assets/image/webp/circle.webp";
import timer from "../assets/image/webp/timer.webp";
import { SOCIAL_ICONS } from '../common/Helper';
import CommonParagraph from '../common/CommonParagraph';
import Icons from '../common/Icons';

const Hero = () => {
    return (
        <div className='xl:pb-24 lg:pb-16 pb-14 relative bg-hero bg-cover bg-no-repeat pt-[15px]' id='hero'>
            <Header />
            <div className="container pt-5 lg:pt-10">
                <div className="mt-12 flex flex-col-reverse items-center lg:flex-row">
                    <div className="lg:w-1/2 w-full flex justify-center items-center">
                        <div className="relative max-w-[338px] w-full mx-8">
                            <img rel='preload' loading='lazy' src={circleImg} alt="circleImg" className='w-full' />
                            <a href="/" className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-[143px] w-[100px] h-[100px] sm:h-[143px] shadow-4xl rounded-full grid place-items-center hover:shadow-darkRed duration-300 ease-linear hover:shadow-3xl'>
                                <img src={timer} alt="timer" className='sm:w-[64px] w-9' />
                            </a>
                            {SOCIAL_ICONS.map((items, index) => (
                                <a key={index} href={items.link} aria-label='icon' target='_blank' rel="noreferrer" className={`${items.position} grid place-items-center bg-white sm:w-[74px] w-16 h-16 sm:h-[74px] shadow-4xl rounded-full hover:shadow-darkRed duration-300 ease-linear hover:shadow-3xl absolute`}>
                                    <img src={items.icon} alt={items.icon} className='sm:w-[41px] w-8' />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full mb-20 lg:mb-0 flex justify-center items-center">
                        <div className="max-w-[509px] w-full relative">
                            <h2 className='font-bold text-center lg:text-left md:text-custom-3xl sm:text-5xl text-4xl text-offBlack capitalize'>raphtory</h2>
                            <Icons IconName="arrowIcon" className="absolute w-[70px] md:w-auto lg:right-[69px] xl:right-[100px] -top-9 md:right-10 right-8 sm:right-16 lg:-top-7" />
                            <CommonParagraph className="text-black text-center mt-3 lg:text-left" text="Raphtory is an open-source platform for distributed real-time temporal graph analytics, allowing you to load and process large dynamic datasets across time." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
