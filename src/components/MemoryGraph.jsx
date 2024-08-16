import raphtoryTimer from '../assets/image/webp/raphtory-timer.webp'
import raphtory from '../assets/image/webp/raphtory.webp'
import CommonButton from '../common/CommonButton'
import CommonHeading from '../common/CommonHeading'
import CommonParagraph from '../common/CommonParagraph'
const MemoryGraph = () => {
    return (
        <div className='bg-black py-14 md:py-24 lg:py-28 xl:pt-[155px] xl:pb-[136px] relative overflow-hidden' id='community'>
            <div className="container relative z-20">
                <div className='flex flex-col items-center'>
                    <div data-aos="zoom-in"><CommonHeading className="text-white" blackText=" in Raphtory" redText="Analysis" /></div>
                    <div data-aos="zoom-in"><CommonParagraph className="text-white pt-3 text-center max-w-[1015px]" text="As a key feature of Raphtory’s design goals was to ensure it could scale to the largest of datasets, algorithms had to be fully distributable. To enable this, we adopted the think like a vertex model, where computation is completed in synchronised supersteps. Within these steps all vertices execute independently, communicating via messages, and can therefore be spread across any number of machines." redText="Read more..." /></div>
                    <img rel='preload' loading='lazy' data-aos="zoom-in" className='max-w-[1012px] w-full mt-[52px] pointer- events-none' src={raphtory} alt="raphtory" />
                </div>
                <div className='flex max-lg:flex-wrap justify-between pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[124px]'>
                    <div data-aos="fade-right" className='lg:max-w-[330px] w-full flex justify-center lg:justify-end lg:pt-[46px] relative z-20'>
                        <img rel='preload' loading='lazy' className='max-w-[150px] md:max-w-[185px] lg:max-w-[205px] lg:h-[292px] w-full pointer-events-none' src={raphtoryTimer} alt="timer" />
                        <div className='max-w-[423px] w-full min-h-[50px] absolute inset-0 bg-darkRed-gradient -z-10 left-[15%] lg:left-[30%] lg:top-[20%] blur-[120px] opacity-40 pointer-events-none'></div>
                    </div>
                    <div data-aos="fade-left" className='flex max-md:pt-10 md:pt-12 lg:pt-0 max-lg:items-center max-lg:w-full flex-col'>
                        <CommonHeading className="text-white max-lg:text-center max-sm:max-w-[360px] sm:max-w-[400px] md:max-w-[486px]" text="Raphtory Algorithms " redText="Bounty Board" />
                        <CommonParagraph className="max-w-[634px] max-lg:text-center text-white pt-3" breakTextClass="block" text="On this page are the algorithms supported and planned to be supported within Raphtory. We will keep this updated as new algorithms are implemented and new ideas are suggested by the community." breakText="For anyone interested in getting involved in Raphtory the low hanging fruit () algorithms will be a great entry point for your first contribution. Once you have merged your algorithm feel free to come back here and tick it off with your github account linked next to it." />
                        <CommonButton text="Read more" hoverClass="bg-black" className="mt-[42px] text-nowrap text-white max-w-[119px] px-[17.5px] bg-darkRed-gradient hover:border-white border-transparent hover:bg-white" />
                    </div>
                </div>
            </div>
            <div className='max-w-[423px] w-full min-h-[50px] absolute bg-darkRed-gradient z-10 top-0 -left-[5%] blur-[130px] pointer-events-none'></div>
            <div className='max-w-[423px] w-full min-h-[50px] absolute bg-darkRed-gradient z-10 top-[4%] -right-[5%] blur-[130px] pointer-events-none'></div>
            <div className='max-w-[423px] w-full min-h-[50px] absolute bg-darkRed-gradient z-10 bottom-[21%] lg:bottom-[25%] -right-[5%] blur-[130px] pointer-events-none'></div>
            <div className='max-w-[423px] w-full min-h-[50px] absolute bg-darkRed-gradient z-10 bottom-0 -right-[5%] blur-[130px] pointer-events-none'></div>
        </div>
    )
}
export default MemoryGraph
