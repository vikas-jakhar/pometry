import CommonHeading from '../common/CommonHeading'
import Icons from '../common/Icons'
import { DATA_ANALYTICS } from '../common/Helper'
import Slider from 'react-slick'
const LatestBlogs = () => {
  var settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: dots => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className='container pb-[32px]'>
      <div className='relative'>
        <CommonHeading className='text-center' text='Latest blogs' />
        <Icons className='absolute right-[28%] top-[-35%] lg:flex hidden' IconName='arrowIcon' />
      </div>
      <div className='news-slider mt-[68px]'>
        <Slider {...settings2}>
          {DATA_ANALYTICS.map((index) => (
            <div key={index} className='bg-white max-w-[366px] w-full rounded-xl p-[15px] border border-lighterWhite'>
              <img src={index.img} alt="#" />
              <p className='max-w-[334px] w-full pt-[10px] xl:text-2xl md:text-custom-sm text-xl font-semibold text-black leading-[33px]'>
                {index.heading}
              </p>
              <p className='font-normal text-base leading-6 text-black opacity-80 max-w-[334px]'>
                {index.paragraph} <span className='font-semibold text-darkRed cursor-pointer'>Read more...</span>
              </p>
              <div className='flex justify-between items-center mt-3'>
                <div className='flex items-center gap-[6px]'>
                  <img className='w-[32px] h-[32px]' src={index.profile} alt="# " />
                  <p className='font-normal text-sm leading-[21px] text-black opacity-80'>
                    {index.profileName}
                  </p>
                </div>
                <p className='font-normal text-sm leading-[21px] text-black opacity-80'>
                  {index.date}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default LatestBlogs
