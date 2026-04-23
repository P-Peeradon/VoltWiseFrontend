import AppPanel from './AppPanel'
import Advertisement from './Advertisement'

const HeroSection = () => {
    return (
        <section className="w-full px-6 md:px-20 gap-8 md:gap-16 flex flex-col md:flex-row justify-start items-center">
            <AppPanel />
            <Advertisement />
        </section>
    )
}

export default HeroSection
