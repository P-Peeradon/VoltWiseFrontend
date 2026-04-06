import React from 'react'
import FeatureCard from './FeatureCard'
import GridIcon from '../assets/thunder.svg';
import EmissionIcon from '../assets/leaf.svg';
import AlertIcon from '../assets/bell.svg'

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
                <div className="flex flex-row justify-start items-start gap-8">
                    <FeatureCard 
                        name={"Live Grid Status"} 
                        description={`
                            Stay informed with real-time updates
                                on Victoria's energy generation. Know
                                exactly when wind and solar are
                                peaking.
                        `}
                    >
                        <img className='w-14 h-14 rounded-full ms-7 mt-7 p-2 bg-green-500/20' src={GridIcon} />
                    </FeatureCard>
                    <FeatureCard 
                        name={"Emission Tracking"} 
                        description={`
                            Track your personal carbon footprint
                                based on your actual device usage and
                                the grid's carbon intensity at that
                                moment.
                        `}
                    >
                        <img className='w-14 h-14 rounded-full ms-7 mt-7 p-2 bg-yellow-600/20' src={EmissionIcon} />
                    </FeatureCard>
                    <FeatureCard
                        name={"Smart Alerts"} 
                        description={`
                            Get notified when it&apos;s the best time to
                                run heavy appliances, ensuring you use
                                the cleanest energy available.
                        `}
                        file={AlertIcon}
                    >
                        <img className='w-14 h-14 rounded-full ms-7 mt-7 p-2 bg-green-500/20' src={AlertIcon} />
                    </FeatureCard>
                </div>
            </div>
        </section>
    )
}

export default FeatureSelection
