import CommonHeading from '../common/CommonHeading'
import CommonParagraph from '../common/CommonParagraph'
import Icons from '../common/Icons'
import designedImg from '../assets/image/webp/designed-img.webp'

const Designed = () => {
    return (
        <div className='container lg:pt-[152px] md:pt-28 sm:pt-20 pt-14 lg:pb-[75px] md:pb-16 sm:pb-14 pb-12' id='product'>
            <div data-aos="zoom-in" className='flex flex-col items-center max-lg:justify-center relative'>
                <CommonHeading className='capitalize text-center' text='designed to go anywhere' />
                <CommonParagraph className='text-black max-w-[568px] pt-3 text-center' text='Our platform is designed to make ingestion and analysis simple, with no need to move or transform data. We make ingesting and analysing your data sets easy!' />
                <Icons className='absolute xl:right-[12%] xl:max-w-[98px] sm:max-w-[80px] max-w-[70px] lg:right-[22%] sm:right-[5%] right-[0%] sm:flex hidden xl:top-[-6%] top-[-14%]' IconName='arrowIcon' />
            </div>
            <div className='flex lg:flex-row flex-col items-center lg:justify-between relative'>
                <div data-aos="fade-up-right" className='max-w-[467px] w-full flex justify-center'>
                    <img rel='preload' loading='lazy' className='w-full max-w-[467px] pointer-events-none' src={designedImg} alt="#" />
                </div>
                <div data-aos="fade-up-left" className='max-w-[522px] w-full max-lg:items-center flex flex-col md:mt-10 sm:mt-6 mt-4'>
                    <div className='flex flex-col'>
                        <p className='font-semibold text-custom-xl text-black max-lg:text-center leading-[41px]'>
                            Simple Ingestion
                        </p>
                        <CommonParagraph className='max-w-[522px] text-black mt-3' text='Built with speed in mind, scaling to millions rows per second. Ingestion turns raw data directly into a temporal graph, complete with all properties.' />
                        <div className='flex gap-3 mt-7'>
                            <Icons IconName='tickIcon' />
                            <p className='font-semibold sm:text-base text-sm text-black leading-6'>
                                Files (CSV, Parquet, etc.)
                            </p>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <Icons IconName='tickIcon' />
                            <p className='font-semibold sm:text-base text-sm text-black leading-6'>
                                Cloud storage (AWS S3, Azure Blob)
                            </p>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <Icons IconName='tickIcon' />
                            <p className='font-semibold sm:text-base text-sm text-black leading-6'>
                                Streaming/PubSub Platforms (Kafka, Pulsar)
                            </p>
                        </div>
                        <div className='flex gap-3 mt-4'>
                            <Icons IconName='tickIcon' />
                            <p className='font-semibold sm:text-base text-sm text-black leading-6'>
                                Databases (Postgres, Redis, etc.)
                            </p>
                        </div>
                    </div>
                </div>
                <div className='md:max-w-[340px] max-w-[280px] w-full h-[171px] bg-darkRed blur-2xl top-[16%] left-[22%] absolute opacity-[12%] z-[-1]'>
                </div>
            </div>
        </div >
    )
}

export default Designed
