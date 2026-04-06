import AppPanel from './AppPanel'
import Advertisement from './Advertisement'

const HeroSection = () => {
    return (
        <section className="w-full px-20 gap-16 flex flex-row justify-start items-center">
            <AppPanel />
            <Advertisement />
        </section>
    )
}

export default HeroSection
