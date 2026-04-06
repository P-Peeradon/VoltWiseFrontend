import React from 'react'

const CallToAction = () => {
    return (
        <section className="w-4xl max-w-4xl px-12 pt-16 pb-12 relative bg-green-800 rounded-[48px] flex flex-col justify-start items-center gap-6 overflow-hidden">
            <div className="w-64 h-64 left-192 -top-28 absolute opacity-20 bg-green-500 rounded-full" />
            <div className="self-stretch flex flex-col justify-start items-center">
                <h2 className="w-[620.08px] h-12 text-center justify-center text-white text-5xl font-extrabold font-['Plus_Jakarta_Sans'] leading-12">
                    Ready to lead the change?
                </h2>
            </div>
            <div className="w-2xl max-w-2xl pb-4 opacity-90 flex flex-col justify-start items-center">
                <p className="w-[626.61px] h-14 text-center justify-center text-white text-xl font-normal font-['Plus_Jakarta_Sans'] leading-7">
                    Join thousands of Victorians using GreenGrid to lower their bills and their environmental impact.
                </p>
            </div>
            <div className="px-10 py-4 bg-white rounded-full inline-flex justify-center items-center">
                <button className="w-44 h-7 text-center justify-center text-green-800 text-lg font-bold font-['Plus_Jakarta_Sans'] leading-7">
                    Create Free Account
                </button>
            </div>
        </section>
    )
}

export default CallToAction
