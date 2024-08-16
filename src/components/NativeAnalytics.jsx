import CommonParagraph from '../common/CommonParagraph'
import Icons from '../common/Icons'
import nativeAnalytics from '../assets/image/webp/native-analytics.webp'

const NativeAnalytics = () => {
    return (
        <div className='container'>
            <div className='flex lg:flex-row flex-col justify-between items-center'>
                <div className='max-w-[526px] relative w-full flex flex-col lg:order-1 order-2'>
                    <div className='flex flex-col' data-aos="fade-up-right">
                        <h4 className='font-semibold text-custom-xl text-black leading-[41px]'>
                            Native analytics
                        </h4>
                        <CommonParagraph className='max-w-[526px] text-black mt-3' text='Analyse your graph data across time, even while newer data is being ingested. Use any of our 25+ built-in graph ML algorithms or write your own with ease.' />
                        <div className='flex gap-3 mt-3'>
                            <Icons IconName='tickIcon' />
                            <p className='font-semibold text-base text-black leading-6'>
                                Standard algorithms with global scope
                            </p>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <Icons IconName='tickIcon' />
                            <p className='font-semibold text-base text-black leading-6'>
                                Pattern detection and temporal motifs
                            </p>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <Icons IconName='tickIcon' />
                            <p className='font-semibold text-base text-black leading-6'>
                                Taint/Contagion tracking
                            </p>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <Icons IconName='tickIcon' />
                            <p className='font-semibold text-base text-black leading-6'>
                                Real-time native scoring
                            </p>
                        </div>
                    </div>
                    <div className='md:max-w-[340px] max-w-[280px] w-full h-[171px] bg-darkRed blur-2xl top-[2%] left-[-16%] absolute opacity-[12%] z-[-1]'>
                    </div>
                </div>
                <div className='max-w-[556px] relative flex max-lg:justify-center max-lg:mb-7 w-full lg:order-2 order-1'>
                    <img loading='lazy' rel='preload' data-aos="fade-up-left" className='lg:max-w-[556px] md:max-w-[480px] sm:max-w-[440px] max-w-[380px] w-full' src={nativeAnalytics} alt="#" />
                    <div className='md:max-w-[340px] max-w-[280px] w-full h-[171px] bg-darkRed blur-2xl top-[1%] left-[50%] absolute opacity-[12%] z-[-1]'>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NativeAnalytics
