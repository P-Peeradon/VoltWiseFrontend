import React from 'react'

const AppPanel = () => {
    return (
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-8">
            <hgroup className="self-stretch flex flex-col justify-start items-start gap-4">
                <h1 className="w-64 h-6 justify-center text-green-800 text-base font-bold font-['Plus_Jakarta_Sans'] uppercase leading-6 tracking-widest">
                    Victoria's Energy Future
                </h1>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center">
                        <h2 class="text-stone-900 text-3xl font-extrabold font-['Plus_Jakarta_Sans'] leading-18">
                            Use energy smarter.
                        </h2>
                        <h2 class="text-green-800 text-3xl font-extrabold font-['Plus_Jakarta_Sans']">
                            Help the planet.
                        </h2>
                    </div>
                </div>
                <div className="w-full max-w-lg flex flex-col justify-start items-start">
                    <p className="self-stretch justify-center text-neutral-700 text-xl font-normal font-['Plus_Jakarta_Sans'] leading-7">
                        Monitor Victoria's live energy mix in real-time. 
                        Optimize your home's consumption based on renewable availability 
                        and reduce your carbon footprint with one tap.
                    </p>
                </div>
            </hgroup>
            <nav className="flex self-stretch justify-start items-start gap-4">
                <button className="px-8 py-4 bg-green-800 rounded-full text-white text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-7 hover:bg-green-700 transition-colors">
                    Get Started
                </button>
                
                <button className="px-8 py-4 bg-neutral-200 rounded-full text-stone-500 text-lg font-semibold font-['Plus_Jakarta_Sans'] leading-7 hover:bg-neutral-300 transition-colors">
                    Learn More
                </button>
            </nav>
        </div>
    )
}

export default AppPanel
