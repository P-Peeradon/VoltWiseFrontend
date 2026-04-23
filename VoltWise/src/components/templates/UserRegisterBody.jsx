import React from 'react'
import RegisterBanner from './sections/RegisterBanner'
import UserRegistrationForm from './UserRegistrationForm'
import ApplianceRegistrationForm from './ApplianceRegistrationForm'
import PrivacyIcon from '../assets/privacy.svg'

const UserRegisterBody = () => {
    return (
        <main className="w-full max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 flex justify-center items-center">
            <form className="w-full max-w-4xl flex flex-col justify-start items-start gap-8 md:gap-12">
                <RegisterBanner />
                <UserRegistrationForm />
                <ApplianceRegistrationForm />
                <footer className="w-full mt-12 pt-8 border-t border-stone-300/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Privacy Info Group */}
                    <div className="flex items-center gap-4">
                        {/* Icon Wrapper */}
                        <div className="shrink-0 w-12 h-12 bg-green-500/20 rounded-full flex justify-center items-center text-green-800">
                            {/* Replace this div with your Privacy SVG logo */}
                            <img src={PrivacyIcon} />
                        </div>

                        <div className="flex flex-col">
                            <h4 className="text-neutral-700 text-sm font-bold leading-5">
                                Privacy Guaranteed
                            </h4>
                            <p className="text-neutral-700 text-sm font-normal leading-5">
                                Data stays encrypted in Victoria.
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full md:w-auto px-12 py-5 bg-green-800 hover:bg-green-900 text-white text-lg font-bold rounded-full transition-all shadow-lg shadow-green-900/10 active:scale-95"
                    >
                        Save & Start Tracking
                    </button>
                </footer>
            </form>
        </main>
    )
}

export default UserRegisterBody
