import React from 'react'
import HeroSection from './HeroSection'
import FeatureSelection from '../FeatureSelection'
import CallToAction from '../sections/CallToAction'

const LandingBody = () => {
    return (
        <main className="w-full max-w-7xl mx-auto self-stretch pt-32 md:pt-44 pb-16 md:pb-24 flex flex-col justify-start items-center gap-12 md:gap-20">
            <HeroSection />
            <FeatureSelection />
            <CallToAction />
        </main>
    )
}

export default LandingBody
