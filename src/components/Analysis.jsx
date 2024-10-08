import React from 'react'
import analysis from "../assets/image/webp/analysis.webp";
import CommonHeading from '../common/CommonHeading';
import CommonParagraph from '../common/CommonParagraph';
import CommonButton from '../common/CommonButton';
import Icons from '../common/Icons';

const Analysis = () => {
    return (
        <div className='xl:py-24 lg:py-16 md:py-8 py-5 relative'>
            <div className="container sm:my-14 my-4 relative z-[1]">
                <div className="flex lg:flex-row items-center flex-col gap-7 xl:gap-16 justify-between">
                    <div data-aos="fade-up-right" className="max-w-[546px] w-full flex flex-col items-center lg:items-start relative">
                        <Icons IconName="arrowIcon" className="absolute -top-8 lg:w-auto md:w-[100px] w-[70px] -right-1 sm:right-9 md:right-2 lg:-right-16" />
                        <CommonHeading redText="Analysis" blackText=" Components" className="text-center lg:text-left" />
                        <CommonParagraph className="mt-2 text-center lg:text-left text-offBlack" text="Each time a user submits an algorithm, a new Query Handler is spawned within the cluster. This handler is in charge of orchestrating the analysis across the partitions, generating the perspectives of the graph (views of the graph through time), performing any global aggregations and returning the results to the user. " />
                        <CommonParagraph className="mt-3 text-center lg:text-left text-offBlack" text="The analytical engine for Raphtory is similarly developed to work in a highly scalable decentralised fashion. The primary component here is the Query Manager which is responsible for accepting, scheduling and executing user queries and algorithms." />
                        <CommonButton text="Read more" className="border-darkRed text-darkRed mt-7 sm:mt-[42px] hover:text-white hover:border-transparent hover:shadow-darkRed" hoverClass="bg-darkRed-gradient" />
                    </div>
                    <div data-aos="fade-up-left" className="max-w-[523px] xl:w-full">
                        <img rel='preload' loading='lazy' src={analysis} alt="analysis" className='w-full' />
                    </div>
                </div>
            </div>
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute top-11 -left-[10%] blur-2xl rounded-full'></span>
        </div>
    )
}

export default Analysis
