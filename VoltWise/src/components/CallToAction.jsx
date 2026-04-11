import React from 'react'
import { Link } from 'react-router'

const CallToAction = () => {
    return (
        <section className="w-4xl max-w-4xl px-12 pt-16 pb-12 relative bg-green-800 rounded-[48px] flex flex-col justify-start items-center gap-6 overflow-hidden">
            <div className="w-64 h-64 left-192 -top-28 absolute opacity-20 bg-green-500 rounded-full" aria-hidden="true" />
            <div className="space-y-4 max-w-2xl z-10">
                <h2 
                    id="cta-heading"
                    className="text-white text-4xl md:text-5xl font-extrabold leading-tight"
                >
                    Ready to lead the change?
                </h2>
                
                <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed">
                    Join thousands of Victorians using GreenGrid to lower their bills and their environmental impact.
                </p>
            </div>
            <Link to="/signup">
                <button 
                    className="px-10 py-4 bg-white hover:bg-stone-100 text-green-800 text-lg font-bold rounded-full transition-colors z-10"
                >
                    Create Free Account
                </button>
            </Link>
        </section>
    )
}

export default CallToAction
