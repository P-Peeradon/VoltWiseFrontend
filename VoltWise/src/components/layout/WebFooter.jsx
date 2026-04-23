import React from 'react'

const WebFooter = () => {
    return (
        <footer className="w-full left-0 py-12 bg-stone-100 flex flex-col justify-start items-start">
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
                <div className="flex flex-col justify-start items-center md:items-start gap-2 text-center md:text-left">
                    <div className="w-auto md:w-24 h-7 justify-center text-neutral-700 text-lg font-bold leading-7">
                        GreenGrid
                    </div>
                    <div className="w-full md:w-[616px] h-auto md:h-6 opacity-80 justify-center text-neutral-700 text-sm md:text-base font-normal uppercase leading-6 tracking-widest px-4 md:px-0">
                        © 2024 GreenGrid Victoria. Earth-first energy stewardship.
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 md:gap-8">
                    <div className="opacity-80 flex flex-col justify-start items-center md:items-start">
                        <div className="w-20 h-6 justify-center text-neutral-700 text-base font-normal uppercase leading-6 tracking-widest">
                            Privacy
                        </div>
                    </div>
                    <div className="opacity-80 flex flex-col justify-start items-center md:items-start">
                        <div className="w-14 h-6 justify-center text-neutral-700 text-base font-normal uppercase leading-6 tracking-widest">
                            Terms
                        </div>
                    </div>
                    <div className="opacity-80 flex flex-col justify-start items-center md:items-start">
                        <div className="w-56 h-6 justify-center text-neutral-700 text-base font-normal uppercase leading-6 tracking-widest">
                            Sustainability Report
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default WebFooter
