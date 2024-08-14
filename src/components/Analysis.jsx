import React from 'react'
import analysis from "../assets/image/webp/analysis.png";
import CommonHeading from '../common/CommonHeading';
import CommonParagraph from '../common/CommonParagraph';
import CommonButton from '../common/CommonButton';

const Analysis = () => {
    return (
        <div className='py-24'>
            <div className="container my-14">
                <div className="flex flex-row items-center gap-16 justify-between">
                    <div className="max-w-[546px] w-full">
                        <CommonHeading redText="Analysis" blackText=" Components" />
                        <CommonParagraph className="mt-3 text-offBlack" text="The analytical engine for Raphtory is similarly developed to work in a highly scalable decentralised fashion. The primary component here is the Query Manager which is responsible for accepting, scheduling and executing user queries and algorithms." />
                        <CommonParagraph className="mt-2 text-offBlack" text="Each time a user submits an algorithm, a new Query Handler is spawned within the cluster. This handler is in charge of orchestrating the analysis across the partitions, generating the perspectives of the graph (views of the graph through time), performing any global aggregations and returning the results to the user. " />
                        <CommonButton text="Read more" className="border-darkRed text-darkRed mt-7 sm:mt-[42px] hover:text-white hover:border-transparent hover:shadow-darkRed" hoverClass="bg-darkRed-gradient" />
                    </div>
                    <div className="max-w-[523px] w-full">
                        <img src={analysis} alt="analysis" className='w-full' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis
