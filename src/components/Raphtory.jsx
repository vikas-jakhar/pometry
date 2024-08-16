import React from 'react'
import CommonHeading from '../common/CommonHeading'
import CommonParagraph from '../common/CommonParagraph'
import CommonButton from '../common/CommonButton'
import raphtoryMan from "../assets/image/webp/raphtory-man.webp";

const Raphtory = () => {
    return (
        <div className='z-[2] relative py-5 pb-1 sm:pt-10 md:pt-24 overflow-hidden max-w-[1920px] mx-auto'>
            <div className="container xl:pt-20 pb-10 mb-7 sm:mt-9 relative z-[1]">
                <div data-aos="fade-right" className="xl:pb-24 lg:max-w-[609px] pl-8 xl:pl-0 w-full flex flex-col items-center lg:items-start">
                    <CommonHeading className="text-center lg:text-left" text="Raphtory from " redText="10,000ft" />
                    <CommonParagraph className="mt-3 text-center lg:text-left max-w-[609px]" text="Data is at the heart of decision making today, and graphs are firmly embedded in the modern data stack. From fraud detection and drug discovery to market and supply modelling, graphs enable previously unachievable insights. However, while graph analytics platforms are increasingly used across the industry, most applications and solutions overlook a " />
                    <CommonParagraph className="mt-2 text-center lg:text-left max-w-[609px]" text="Current solutions focus solely on the latest version of the data - missing out on how it has arrived at the state it is in today." />
                    <CommonButton text="Read more" className="border-darkRed text-darkRed mt-7 sm:mt-[42px] hover:text-white hover:border-transparent hover:shadow-darkRed" hoverClass="bg-darkRed-gradient" />
                </div>
            </div>
            <img loading='lazy' rel='preload' src={raphtoryMan} alt="raphtoryMan" className='max-w-[663px] mx-auto w-1/2 xl:w-full xl:max-h-[511px] xl:h-full right-0 xl:top-[152px] top-24 lg:absolute' />
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute top-[11%] -left-[7%] blur-3xl rounded-full'></span>
        </div>
    )
}
export default Raphtory