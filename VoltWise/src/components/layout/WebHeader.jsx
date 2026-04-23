import React from 'react'
import { Link } from 'react-router'
import ProfileIcon from '../assets/profile.svg'

const WebHeader = () => {
    return (
        <header className="w-full left-0 top-0 absolute bg-stone-100 inline-flex flex-col justify-start items-start">
            <nav className="w-full px-6 md:px-12 py-6 inline-flex justify-between items-center">
                <div className="inline-flex flex-col justify-start items-start">
                    <h1 className="w-28 h-8 justify-center text-green-800 text-2xl font-bold leading-8">GreenGrid</h1>
                </div>
                <nav className="hidden md:flex justify-start items-center gap-8">
                    <Link className="pb-1 border-b-2 border-green-800 inline-flex flex-col justify-start items-start" to="/" >
                        <p className="w-12 h-6 justify-center text-green-800 text-base font-semibold leading-6">
                            Home
                        </p>
                    </Link>
                    <Link className="inline-flex flex-col justify-start items-start">
                        <p className="w-20 h-6 justify-center text-neutral-700 text-base font-medium leading-6">
                            Grid Status
                        </p>
                    </Link>
                    <Link className="inline-flex flex-col justify-start items-start">
                        <p className="w-20 h-6 justify-center text-neutral-700 text-base font-medium leading-6">
                            My Devices
                        </p>
                    </Link>
                    <Link className="inline-flex flex-col justify-start items-start">
                        <p className="w-12 h-6 justify-center text-neutral-700 text-base font-medium leading-6">
                            Offset
                        </p>
                    </Link>
                    <Link className="inline-flex flex-col justify-start items-start">
                        <p className="w-11 h-6 justify-center text-neutral-700 text-base font-medium leading-6">
                            Alerts
                        </p>
                    </Link>
                </nav>
                <div className="p-2 rounded-full inline-flex flex-col justify-center items-center">
                    <div className="inline-flex justify-center items-start">
                        <img src={ProfileIcon} alt="profile" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default WebHeader
