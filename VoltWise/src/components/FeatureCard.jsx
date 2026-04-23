

import Card from './ui/Card'

const FeatureCard = ({ name, description, children }) => {
    return (
        <Card as="article" className="w-90 h-80">
            {children}
            <div className="flex flex-col justify-start py-10 items-center">
                <div className="w-72 justify-start items-start">
                    <h3 className="justify-center text-stone-900 text-2xl font-semibold leading-8">
                        {name}
                    </h3>
                </div>
                <div className="w-72 justify-start items-start">
                    <p className="justify-center text-neutral-700 text-base font-normal leading-6">
                        {description}
                    </p>
                </div>
            </div>

        </Card>
    )
}

export default FeatureCard
