import React from 'react'

const AppPanel = () => {
    return (
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-6 md:gap-8">
            <hgroup className="self-stretch flex flex-col justify-start items-start gap-4">
                <h1 className="w-full md:w-64 h-auto md:h-6 justify-center text-green-800 text-sm md:text-base font-bold uppercase leading-6 tracking-widest">
                    Victoria's Energy Future
                </h1>
                <div className="self-stretch flex flex-col justify-start items-start">
                    <div className="self-stretch justify-center">
                        <h2 className="text-stone-900 text-4xl md:text-5xl font-extrabold leading-tight">
                            Use energy smarter.
                        </h2>
                        <h2 className="text-green-800 text-4xl md:text-5xl font-extrabold leading-tight">
                            Help the planet.
                        </h2>
                    </div>
                </div>
                <div className="w-full max-w-lg flex flex-col justify-start items-start">
                    <p className="self-stretch justify-center text-neutral-700 text-lg md:text-xl font-normal leading-7">
                        Monitor Victoria's live energy mix in real-time.
                        Optimize your home's consumption based on renewable availability
                        and reduce your carbon footprint with one tap.
                    </p>
                </div>
            </hgroup>
            <nav className="flex flex-col sm:flex-row self-stretch justify-start items-start gap-4 w-full">
                <button className="w-full sm:w-auto px-8 py-4 bg-green-800 rounded-full text-white text-base md:text-lg font-semibold leading-7 hover:bg-green-700 transition-colors">
                    Get Started
                </button>

                <button className="w-full sm:w-auto px-8 py-4 bg-neutral-200 rounded-full text-stone-500 text-base md:text-lg font-semibold leading-7 hover:bg-neutral-300 transition-colors">
                    Learn More
                </button>
            </nav>
        </div>
    )
}

export default AppPanel
