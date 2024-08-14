import React from 'react'
import graph from "../assets/image/webp/graph.png";
import CommonHeading from '../common/CommonHeading';
import CommonParagraph from '../common/CommonParagraph';
import CommonButton from '../common/CommonButton';

const Model = () => {
    return (
        <div className='bg-offBlack py-10 lg:py-24 relative'>
            <div className="container my-2 sm:my-[73px] 2xl:relative">
                <div className="flex lg:flex-row flex-col-reverse items-center gap-11 justify-end">
                    <div className="w-full max-w-[564px] xl:absolute left-[7%] 2xl:-left-[4%]">
                        <img src={graph} alt="graph" />
                    </div>
                    <div className="w-full max-w-[574px] relative flex flex-col items-center lg:items-start">
                        <CommonHeading text="The Graph " redText="Model" className="text-white text-center lg:text-left" />
                        <CommonParagraph className="text-white mt-3 text-center lg:text-left" text="Raphtory’s model is very similar to the property graph model that you may have seen in other graph systems. There are vertices (entities) and edges (relationships), both of which can have a type and a set of key/value properties dictating their characteristics." />
                        <CommonParagraph className="text-white mt-2 text-center lg:text-left" text="Raphtory improves on this model by further tracking every update that occurs and when they occur. These updates are recorded in a chronological log maintaining the full property and relationship history of all entities (as opposed to overwriting the information when new data arrives). This in turn allows for a complete historic exploration of the graph." />
                        <CommonButton className="text-white hover:text-darkRed mt-[42px] hover:border-transparent hover:shadow-darkRed" hoverClass="bg-white" text="Read more" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Model
