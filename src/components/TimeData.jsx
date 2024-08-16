import timeData from '../assets/image/webp/time-data.webp'
import CommonHeading from '../common/CommonHeading'
import CommonParagraph from '../common/CommonParagraph'
import Icons from '../common/Icons'
const TimeData = () => {
  return (
    <div className='container lg:py-[152px] md:py-20 sm:py-16 py-14'>
      <div className='flex lg:flex-row flex-col lg:justify-between max-lg:items-center'>
        <div className='max-w-[570px] w-full flex max-lg:justify-center' data-aos="fade-up-right">
          <img className='lg:max-w-[570px] max-w-[400px] w-full ' src={timeData} alt="#" />
        </div>
        <div className='max-w-[478px] w-full relative' data-aos="fade-up-left">
          <CommonHeading className='max-w-[478px]' text='A real-time Data Time Machine' />
          <CommonParagraph className='max-w-[478px] mt-3' text="The only platform that allows you to natively rewind your data in seconds, run analysis across time epochs and unearth causal relationships." />
          <CommonParagraph className='max-w-[478px]' text="Temporal analysis allows you to easily focus on causality in data. Identifying what really matters.Our platform has been applied to solutions across multiple sectors. Including" />
          <div className='flex gap-3 mt-8'>
            <Icons IconName='tickIcon' />
            <p className='font-semibold sm:text-base text-sm text-black leading-6'>
              Crypto and financial fraud
            </p>
          </div>
          <div className='flex gap-3 mt-4'>
            <Icons IconName='tickIcon' />
            <p className='font-semibold sm:text-base text-sm text-black leading-6'>
              Insurance and root-cause
            </p>
          </div>
          <div className='flex gap-3 mt-4'>
            <Icons IconName='tickIcon' />
            <p className='font-semibold sm:text-base text-sm text-black leading-6'>
              Social network analysis
            </p>
          </div>
          <div className='md:max-w-[340px] max-w-[280px] w-full h-[171px] bg-darkRed blur-2xl top-[1%] left-[-10%] absolute opacity-[12%] z-[-1]'>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeData
