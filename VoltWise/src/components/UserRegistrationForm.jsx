import InfoIcon from '../assets/info.svg'

const UserRegistrationForm = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-start items-stretch lg:items-start gap-8 lg:gap-16 w-full">
            {/* Main Input Section */}
            <div className="w-full lg:w-1/2 p-6 md:p-8 bg-stone-100 rounded-[32px] md:rounded-[48px] space-y-6">
                {/* Full Name Field */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="fullName"
                        className="px-1 text-neutral-700 text-sm font-bold uppercase tracking-wide"
                    >
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-6 py-4 bg-stone-200 rounded-md text-stone-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-800 transition-all"
                    />
                </div>

                {/* Suburb Field */}
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="suburb"
                        className="px-1 text-neutral-700 text-sm font-bold uppercase tracking-wide"
                    >
                        Suburb
                    </label>
                    <input
                        id="suburb"
                        type="text"
                        placeholder="e.g. South Yarra, VIC"
                        className="w-full px-6 py-4 bg-stone-200 rounded-md text-stone-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-800 transition-all"
                    />
                </div>
            </div>

            {/* Info Alert Box */}
            <aside className="w-full lg:w-1/2 p-6 md:p-8 bg-yellow-600/10 border border-yellow-600/20 rounded-[32px] md:rounded-[48px] flex flex-col gap-3">
                <header className="flex items-center gap-4">
                    {/* Icon Slot - Replace the div with your SVG logo logic */}
                    <img
                        className="w-7 h-7 bg-yellow-600/20"
                        src={InfoIcon}
                    />
                    <h3 className="text-yellow-950 text-base font-bold">
                        Why we ask
                    </h3>
                </header>
                <p className="text-neutral-700 text-base leading-relaxed">
                    Your location allows us to sync with local Victorian grid demand and weather patterns,
                    ensuring your energy offsets are 100% accurate to your neighborhood.
                </p>
            </aside>
        </div>
    )
}

export default UserRegistrationForm
