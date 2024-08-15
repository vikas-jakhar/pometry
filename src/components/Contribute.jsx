import React from 'react'
import CommonHeading from '../common/CommonHeading';
import bountyBoard from "../assets/image/webp/bounty-board.webp";
import CommonParagraph from '../common/CommonParagraph';
import githubRepo from "../assets/image/webp/github-repo.webp";
import CommonButton from '../common/CommonButton';

const Contribute = () => {
    return (
        <div className='lg:py-24 md:py-16 sm:py-8 py-1 bg-black relative overflow-hidden'>
            <div className="container my-9 py-0.5">
                <div data-aos="zoom-in"><CommonHeading className="text-white max-w-[787px] text-center mx-auto" text="If you want to contribute to the " redText="project you can Join" /></div>
                <div className="sm:mt-16 mt-8 pt-2 flex md:flex-row flex-col justify-between gap-5 items-center">
                    <div data-aos="zoom-in-right" className="max-w-[537px] w-full px-3">
                        <img src={bountyBoard} alt="bountyBoard" className='w-full' />
                    </div>
                    <div data-aos="zoom-in-left" className="flex flex-col items-center md:items-start max-w-[513px] w-full">
                        <p className='font-semibold text-custom-xl text-white'>Bounty Board</p>
                        <CommonParagraph className="mt-3 text-white text-center md:text-left" text="Checkout our Bounty Board where we keep track of all the functionality and algorithms we want to implement. There are many labeled as low hanging fruit just waiting for a newbie to tackle. For bugs and miscellaneous suggestions, you can checkout our Git Issues." />
                    </div>
                </div>
                <div className="sm:mt-20 mt-8 lg:pt-3 flex md:flex-row flex-col-reverse items-center gap-6 md:gap-10 lg:gap-[109px] justify-center">
                    <div data-aos="zoom-in-right" className="max-w-[538px] w-full flex flex-col items-center md:items-start">
                        <p className='text-white text-custom-xl font-semibold'>Github Repo</p>
                        <CommonParagraph className="text-white mt-3 text-center md:text-left" text="Once you know what you want to work on, head over to the Github repo   and give us a clone. The project is straight forward to get running, but everyone on slack is always there to give a hand." />
                        <CommonButton text="Join Now" className="lg:mt-[42px] mt-7 text-white bg-darkRed-gradient border-none" hoverClass="bg-black" />
                    </div>
                    <div data-aos="zoom-in-left" className="max-w-[358px] w-full">
                        <img src={githubRepo} alt="githubRepo" className='w-full' />
                    </div>
                </div>
            </div>
            <span className='hidden md:flex w-[423px] h-[310px] bg-darkRed-gradient opacity-15 absolute top-5 left-0 blur-2xl rounded-full'></span>
            <span className='hidden md:flex w-[423px] h-[310px] bg-darkRed-gradient opacity-15 absolute top-5 right-0 blur-2xl rounded-full'></span>
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute bottom-[20%] left-9 blur-2xl rounded-full'></span>
            <span className='hidden md:flex w-[423px] h-[171px] bg-darkRed-gradient opacity-15 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl rounded-full'></span>
            <span className='hidden md:flex w-[423px] h-[310px] bg-darkRed-gradient opacity-15 absolute -bottom-[5%] -right-[5%] blur-2xl rounded-full'></span>
        </div>
    )
}

export default Contribute