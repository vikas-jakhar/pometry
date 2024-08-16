import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonParagraph from '../common/CommonParagraph'
import CommonButton from '../common/CommonButton'
import Icons from '../common/Icons'
import { CARD_DATA } from '../common/Helper'
import manJumping from "../assets/image/webp/man-jumping.webp";
const Raphtory = () => {
    return (
        <div className='z-[2] relative py-5 sm:py-10 md:py-24 overflow-hidden max-w-[1920px] mx-auto'>
            <div className="container xl:pt-20 mb-7 sm:mt-9 relative z-[1]">
                <div data-aos="fade-right" className="md:pb-24 lg:max-w-[609px] w-full flex flex-col items-center lg:items-start">
                    <CommonHeading className="text-center lg:text-left" text="Raphtory from " redText="10,000ft" />
                    <CommonParagraph className="mt-3 text-center lg:text-left max-w-[609px]" text="Data is at the heart of decision making today, and graphs are firmly embedded in the modern data stack. From fraud detection and drug discovery to market and supply modelling, graphs enable previously unachievable insights. However, while graph analytics platforms are increasingly used across the industry, most applications and solutions overlook a " />
                    <CommonParagraph className="mt-2 text-center lg:text-left max-w-[609px]" text="Current solutions focus solely on the latest version of the data - missing out on how it has arrived at the state it is in today." />
                    <CommonButton text="Read more" className="border-darkRed text-darkRed mt-7 sm:mt-[42px] hover:text-white hover:border-transparent hover:shadow-darkRed" hoverClass="bg-darkRed-gradient" />
                </div>
                <div className="xl:pt-20 pt-10 mt-2.5">
                    <div data-aos="zoom-in"><CommonHeading text="If you like " redText="what you see " blackText="you should" className="text-center" /></div>
                    <div className="mt-12 pt-1 max-w-[796px] w-full mx-auto flex-wrap md:flex-nowrap justify-center flex flex-row gap-6">
                        {CARD_DATA.map((items, index) => (
                            <div data-aos="flip-down" key={index} className="relative max-w-[250px] duration-300 ease-linear min-h-[277px] hover:bg-darkRed-gradient rounded-lg pb-0.5 hover:shadow-5xl">
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
            <img loading='lazy' rel='preload' src={manJumping} alt="manJumping" className='max-w-[663px] w-full hidden sm:flex max-h-[511px] h-full right-0 xl:top-[152px] top-24 absolute opacity-50 xl:opacity-100' />
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute top-[11%] -left-[7%] blur-3xl rounded-full'></span>
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute top-[59%] left-[2%] blur-3xl rounded-full'></span>
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute -right-[5%] bottom-[42px] blur-3xl rounded-full'></span>
        </div>
    )
}
export default Raphtory