import CommonHeading from '../common/CommonHeading'
import Icons from '../common/Icons'
import raphtoryEllipse from '../assets/image/webp/raphtory-ellipse.webp'

const RunRaphtory = () => {
  return (
    <div className='container lg:py-[152px] md:py-24 sm:py-16 py-14' id='raphtory'>
      <div data-aos="zoom-in" className='bg-darkRed-gradient relative rounded-[32px] w-full flex-col items-center flex justify-center lg:py-[90px] max-lg:px-5 max-sm:px-3 md:py-16 sm:py-12 py-8'>
        <CommonHeading className='text-white z-10 relative max-w-[824px] text-center capitalize max-sm:text-custom-sm max-sm:leading-6' text="If you want to run Raphtory in production you should" />
        <div className='flex gap-3 mt-6 z-10'>
          <a href='https://discord.com/' aria-label='discordIcon' target='blank' className='w-10 h-10 rounded-[48px] border-[2px] border-white group bg-white hover:bg-darkRed-gradient hover:duration-500 flex items-center justify-center'>
            <Icons IconName="discordIcon" />
          </a>
          <a href='https://x.com/?lang=en' aria-label='twitterIcon' target='blank' className='w-10 h-10 rounded-[48px] border-[2px] border-white bg-white group hover:bg-darkRed-gradient hover:duration-500 flex items-center justify-center'>
            <Icons IconName="twitterIcon" />
          </a>
          <a href='https://github.com/' aria-label='githubIcon' target='blank' className='w-10 h-10 border-[4px] border-white rounded-[48px] group hover:bg-white hover:duration-500 flex items-center justify-center'>
            <Icons IconName="githubIcon" />
          </a>
        </div>
        <img className='absolute left-[-2%] bottom-[2%]' src={raphtoryEllipse} alt="#" />
      </div>
    </div>
  )
}

export default RunRaphtory
