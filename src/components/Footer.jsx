import logoFooter from "../assets/image/webp/logo-footer.webp"
import slack from '../assets/image/svg/slack.svg'
import twitter from '../assets/image/svg/twitter.svg'
import linkedin from '../assets/image/svg/linkedin.svg'
import { FOOTER_DATA } from '../common/Helper'
const Footer = () => {
    return (
        <div className='bg-black relative'>
            <div className='container lg:pt-[100px] md:pt-20 sm:pt-16 pt-14 relative z-10'>
                <div className='flex w-full lg:flex-row flex-col lg:justify-between'>
                    <div className='max-w-[236px] w-full lg:mb-0 md:mb-10 sm:pb-8 pb-7'>
                        <img src={logoFooter} alt="#"/>
                        <div className='flex gap-3 mt-4'>
                            <a href="https://slack.com/intl/en-in" target='blank' className='hover:scale-110 duration-300'>
                                <img src={slack} alt="#" />
                            </a>
                            <a href="https://x.com/?lang=en" target='blank' className='hover:scale-110 duration-300'>
                                <img src={twitter} alt="#" />
                            </a>
                            <a href="https://in.linkedin.com/" target='blank' className='hover:scale-110 duration-300'>
                                <img src={linkedin} alt="#" />
                            </a>
                        </div>

                    </div>
                    <div className='lg:max-w-[710px] w-full flex flex-row flex-wrap sm:justify-between md:gap-[44px] lg:mb-[98px] md:mb-20 sm:mb-16 mb-14'>
                        {FOOTER_DATA.map((index) => (
                            <div key={index} className='flex flex-col max-md:w-5/12 max-sm:w-6/12 max-sm:pr-4 max-md:mb-5'>
                                <h5 className='font-semibold text-base text-white leading-6'>
                                    {index.heading}
                                </h5>
                                <div className="flex flex-col mt-4 gap-2">
                                    {index.items.map((e) => (
                                        <a key={e} href="/" className='font-normal text-base text-white opacity-70 leading-6 hover:opacity-100 duration-300'>{e.text}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='font-normal text-sm text-white leading-5 text-end opacity-70 pb-8'>
                Copyright © 2023 Pometry. All rights reserved
                </p>
            </div>
            <div className='md:max-w-[340px] max-w-[280px] w-full h-[171px] bg-darkRed blur-2xl top-[0%] left-[-10%] absolute opacity-[20%]'>
                </div>
                <div className='md:max-w-[340px] max-w-[280px] w-full h-[171px] bg-darkRed blur-2xl bottom-[-10%] left-[10%] absolute opacity-[20%]'>
                </div>
                <div className='md:max-w-[340px] max-w-[280px] w-full h-[171px] bg-darkRed blur-2xl bottom-[-10%] right-[-10%] absolute opacity-[20%]'>
                </div>
                <div className='md:max-w-[340px] max-w-[280px] w-full h-[171px] bg-darkRed blur-2xl top-[-20%] right-[20%] absolute opacity-[20%]'>
                </div>
        </div>
    )
}

export default Footer
