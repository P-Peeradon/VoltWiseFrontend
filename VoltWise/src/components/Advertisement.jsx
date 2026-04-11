import HeroImage from '../assets/modern_sustainable_home.jpg'

const Advertisement = () => {
    return (
        <figure className="relative w-full flex flex-col">
            {/* Main Image Container */}
            <div className="w-full bg-stone-200 rounded-xl overflow-hidden">
                <img
                    className="h-96 aspect-4/3 object-cover block"
                    src={HeroImage}
                    alt="Sustainable House"
                />
            </div>

            {/* Floating Data Card */}
            <figcaption className="left-4 md:left-12 absolute -bottom-5 max-w-64 md:max-w-80 p-6 md:p-8 bg-white rounded-xl shadow-xl flex flex-col gap-2">
                <h3 className="text-neutral-700 text-sm md:text-base font-bold uppercase tracking-wide">
                    Current Grid Mix
                </h3>

                <div className="flex items-end gap-2">
                    <span className="text-green-800 text-4xl font-extrabold leading-none">
                        74% {/* Do not hardcode this value */}
                    </span>
                    <span className="pb-1 text-green-500 text-base font-bold">
                        Renewable
                    </span>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden" role="progressbar" aria-valuenow="74" aria-valuemin="0" aria-valuemax="100">
                    <div className="h-full bg-green-800 rounded-full" style={{ width: '74%' }} /> {/* Width is equal to percentage of renewable energy per total */}
                </div>
            </figcaption>
        </figure>
    )
}

export default Advertisement
