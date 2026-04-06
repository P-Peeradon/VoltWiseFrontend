

const FeatureCard = ({ name, description, children }) => {
    return (
        <article className="w-90 h-80 bg-white rounded-[48px]">
            {children}
            <div className="flex flex-col justify-start py-10 items-center">
                <div className="w-72 justify-start items-start">
                <h3 className="justify-center text-stone-900 text-2xl font-semibold font-['Plus_Jakarta_Sans'] leading-8">
                    { name }
                </h3>
            </div>
            <div className="w-72 justify-start items-start">
                <p className="justify-center text-neutral-700 text-base font-normal font-['Plus_Jakarta_Sans'] leading-6">
                    { description }
                </p>
            </div>
            </div>
            
        </article>
    )
}

export default FeatureCard
