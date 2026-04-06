import React from 'react'
import FeatureCard from './FeatureCard'

const FeatureSelection = () => {
    return (
        <section className="self-stretch px-12 py-24 bg-stone-100 inline-flex flex-col justify-start items-start">
            <div className="w-full max-w-480 flex flex-col justify-start items-start gap-16">
                <hgroup className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch flex flex-col justify-start items-center">
                        <h1 className="w-[514.16px] h-10 text-center justify-center text-stone-900 text-4xl font-extrabold font-['Plus_Jakarta_Sans'] leading-10">
                            Intelligent Energy Stewardship
                        </h1>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-center">
                        <h2 className="w-[462.98px] h-7 text-center justify-center text-neutral-700 text-lg font-normal font-['Plus_Jakarta_Sans'] leading-7">
                            Powerful tools designed for a cleaner, greener Victoria.
                        </h2>
                    </div>
                </hgroup>
                <div className="self-stretch inline-flex flex-col justify-start items-start">
                    <FeatureCard 
                        name={"Live Grid Status"} 
                        description={`
                            Stay informed with real-time updates
                                on Victoria&apos;s energy generation. Know
                                exactly when wind and solar are
                                peaking.
                        `}
                        tone={"green"}
                        fileName={"/thunder.svg"}
                    />
                    <FeatureCard 
                        name={"Emission Tracking"} 
                        description={`
                            Track your personal carbon footprint
                                based on your actual device usage and
                                the grid&apos;s carbon intensity at that
                                moment.
                        `}
                        tone={"yellow"}
                        fileName={"/leaf.svg"}
                    />
                    <FeatureCard
                        name={"Smart Alerts"} 
                        description={`
                            Get notified when it&apos;s the best time to
                                run heavy appliances, ensuring you use
                                the cleanest energy available.
                        `}
                        tone={"yellow"}
                        fileName={"/bell.svg"}
                    />
                </div>
            </div>
        </section>
    )
}

export default FeatureSelection
