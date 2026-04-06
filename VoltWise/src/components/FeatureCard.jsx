import React from 'react'
import FeatureLogo from './FeatureLogo'

const FeatureCard = ({ name, description, fileName, tone }) => {
    return (
        <article className="self-stretch h-80 relative bg-white rounded-[48px]">
            <FeatureLogo tone={ tone } logoFileName={fileName} />
            <div className="w-72 left-10 top-32 absolute inline-flex flex-col justify-start items-start">
                <h3 className="w-44 h-8 justify-center text-stone-900 text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-8">
                    { name }
                </h3>
            </div>
            <div className="w-72 left-10 top-44 absolute inline-flex flex-col justify-start items-start">
                <p className="justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">
                    { description }
                </p>
            </div>
        </article>
    )
}

export default FeatureCard
