import React from 'react'
import Icons from '../common/Icons'
import { CARD_DATA } from '../common/Helper'
import CommonHeading from '../common/CommonHeading'
import CommonParagraph from '../common/CommonParagraph'

const SeeYou = () => {
    return (
        <div className='pb-24 pt-8 relative'>
            <div className="container pb-7 relative z-[5]">
                <div className="flex flex-col justify-center">
                    <div data-aos="zoom-in"><CommonHeading text="If you like " redText="what you see " blackText="you should" className="text-center" /></div>
                    <div className="md:mt-12 pt-1 md:max-w-[796px] md:w-full md:mx-auto flex-wrap md:flex-nowrap justify-center flex flex-row md:gap-6 -mx-3">
                        {CARD_DATA.map((items, index) => (
                            <div data-aos="flip-down" key={index} className="relative mt-6 md:mt-0 md:w-full px-3 md:px-0 w-full  sm:w-1/2 md:max-w-[250px] duration-300 ease-linear min-h-[277px] hover:bg-darkRed-gradient rounded-lg pb-0.5 hover:shadow-5xl">
                                <div className="relative z-[1] bg-white px-2 flex flex-col items-center w-full border border-lightGray rounded-lg pt-6 min-h-[277px] h-full duration-300 ease-linear hover:border-white">
                                    <a href={items.link} aria-label={`${items.icon} icon`} rel="noreferrer" target='_blank' className="cursor-pointer w-[52px] h-[52px] grid place-items-center rounded-md bg-lightRed-gradient">
                                        <Icons IconName={items.icon} />
                                    </a>
                                    <p className='mt-6 font-semibold text-2xl text-offBlack'>{items.heading}</p>
                                    <CommonParagraph className="mt-0.5 max-w-[202px] text-center" text={items.text} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute top-[5%] left-[2%] blur-3xl rounded-full'></span>
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute -right-[5%] bottom-[42px] blur-3xl rounded-full'></span>
        </div>
    )
}

export default SeeYou