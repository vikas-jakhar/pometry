import algorithm from '../assets/image/webp/algorithm.webp'
import CommonButton from '../common/CommonButton'
import CommonHeading from '../common/CommonHeading'
import CommonParagraph from '../common/CommonParagraph'
import Icons from '../common/Icons'
const Algorithm = () => {
    return (
        <div className='py-14 sm:py-16 md:py-24 lg:py-32 xl:py-[152px] relative'>
            <div className='container relative z-20'>
                <div className='flex max-lg:flex-wrap max-lg:justify-center items-center justify-between'>
                    <img data-aos="fade-right" className='max-w-[535px] w-full pointer-events-none' src={algorithm} alt="algorithm-structure" />
                    <div data-aos="fade-left" className='flex flex-col ps-6 max-lg:ps-0 xl:ps-0 max-lg:pt-12'>
                        <div className='relative'>
                            <CommonHeading className="max-lg:text-center text-black" text="Algorithm Structure" />
                            <Icons className="absolute max-sm:w-[60px] -top-12 right-0 sm:-right-8 sm:-top-9" IconName="AlgorithmIcon" />
                        </div>
                        <CommonParagraph className="max-w-[700px] max-lg:text-center lg:max-w-[533px] pt-3 leading-6" text="To add some structure to these individual vertex operations the Algorithm Structure layer defines the stages to be completed via Step and Iterate functions. This specifies the flow of an algorithm from setup to final convergence, upon which the user may Select the elements of interest from each vertex to be written out." />
                        <CommonButton text="Read more" className="mt-[42px] hover:shadow-darkRed max-lg:mx-auto max-w-[148px] hover:text-white text-nowrap border-darkRed text-darkRed hover:border-white" hoverClass="bg-darkRed-gradient" />
                    </div>
                </div>
            </div>
            <div className='max-w-[423px] w-full min-h-[50px] absolute bg-darkRed-gradient z-10 bottom-[45%] right-[-5%] blur-[130px] pointer-events-none'></div>
            <div className='max-w-[423px] w-full min-h-[50px] absolute bg-darkRed-gradient z-10 -top-[3%] -left-[5%] blur-[130px] pointer-events-none'></div>
        </div>
    )
}
export default Algorithm