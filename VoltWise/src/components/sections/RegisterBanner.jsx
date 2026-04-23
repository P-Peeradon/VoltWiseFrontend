import React from 'react'

const RegisterBanner = () => {
  return (
    <header className="flex flex-col items-center text-center pt-8 gap-4 w-full max-w-2xl mx-auto">
        {/* Subtitle / Kicker */}
        <span className="text-green-800 text-sm md:text-base font-bold uppercase tracking-[0.2em]">
            Personalization
        </span>

        {/* Primary Heading */}
        <h1 className="text-stone-900 text-4xl md:text-5xl font-extrabold leading-tight">
            Let's set up your grid.
        </h1>

        {/* Description */}
        <p className="text-neutral-700 text-base md:text-lg max-w-lg leading-relaxed">
            Help us tailor your energy insights by telling us about your Victorian home setup.
        </p>
    </header>
  )
}

export default RegisterBanner
