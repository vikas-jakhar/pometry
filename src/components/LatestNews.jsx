import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import newsTwitter from '../assets/image/svg/twitter-logo.svg';
import CommonHeading from '../common/CommonHeading';
import { LATEST_NEWS_DATA } from '../common/Helper';

const LatestNews = () => {
    var news_slider = {
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
        <div className='pt-14 sm:pt-20 md:pt-24 lg:pt-32 xl:pt-[152px] pb-11 relative'>
            <div className='container relative z-20'>
                <div className='flex flex-col'>
                    <div data-aos="zoom-in">
                        <CommonHeading className="text-black text-center" text="Latest News About" redText=" Raphtory" />
                    </div>
                    <div className='news-slider pt-[32px]' data-aos="zoom-in">
                        <Slider {...news_slider}>
                            {LATEST_NEWS_DATA.map((item, index) => (
                                <div key={index} className='max-w-[372px] rounded-xl w-full min-h-[230px] sm:min-h-[276px] md:min-h-[230px] border border-offWhite duration-300 ease-linear hover:border-transparent hover:shadow-6xl p-[15px] flex bg-white flex-col'>
                                    <div className='flex flex-col justify-between h-full'>
                                        <div>
                                            <div className='flex justify-between'>
                                                <div className='flex flex-col'>
                                                    <h5 className='font-semibold text-base leading-6 text-offBlack'>Tweets from @raphtory</h5>
                                                    <div className='flex items-center gap-[6px] pt-[5px]'>
                                                        <img width="42px" height="42px" src={item.profile} alt="richard" />
                                                        <div className='flex flex-col'>
                                                            <p className='font-semibold text-base leading-6 text-offBlack'>{item.name}</p>
                                                            <div className='flex'>
                                                                <p className='font-normal text-sm leading-[21px] text-offGray'>{item.id}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <a className='inline-flex' href="https://x.com/?lang=en" rel="noreferrer" target='_blank'><img width="32px" height="30.49px" src={newsTwitter} alt="twitter-logo" /></a>
                                            </div>
                                            <p className='text-base font-normal leading-6 text-offBlack opacity-80 pt-[13px]'> {item.paragrapgh} {item.link} {item.paraSecond}</p>
                                        </div>
                                        <div className='flex justify-between pt-4 items-center'>
                                            <div className='flex items-center gap-3'>
                                                <img width="16px" height="16px" src={item.message} alt="message" />
                                                <div className='flex gap-[2px]'>
                                                    <img width="16px" height="16px" src={item.heart} alt="hearticon" />
                                                    <p className='font-normal text-sm leading-[21px] text-offBlack'>{item.number}</p>
                                                </div>
                                            </div>
                                            <img width="16px" height="16px" src={item.info} alt="infoIcon" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='max-w-[423px] w-full min-h-[50px] absolute bg-darkRed-gradient z-10 top-[20%] -left-[5%] blur-[130px] pointer-events-none'></div>
        </div>
    )
}

export default LatestNews