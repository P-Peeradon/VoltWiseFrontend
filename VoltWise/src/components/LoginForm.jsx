import { useState } from 'react'
import { Link } from 'react-router'
import GoogleIcon from '../assets/google-icon.svg'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        if (!email || !password) {
            setError("Error: Please enter email and password")
            return;
        }

        else {
            setError("")
            try {
                await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
                    email: email,
                    password: password
                })
            } catch (err) {
                setError(err?.message ?? "Error during login process")
            }
        }
    }

    return (
        <main className="w-full max-w-157.5 p-6 md:p-12 bg-white rounded-[32px] md:rounded-[48px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col justify-start items-center mx-auto box-border">
            {/* Header Section */}
            <header className="text-center mb-10">
                <h1 className="text-stone-900 text-4xl font-extrabold leading-10">
                    Welcome Back
                </h1>
                <p className="text-stone-500 text-xl font-normal mt-2">
                    Sign in to manage your sustainable home.
                </p>
            </header>

            {/* Form Section */}
            <form className="w-full flex flex-col gap-6" onSubmit={handleLogin}>
                <div className="flex flex-col gap-2.5">
                    <label htmlFor="email" className="ml-1 text-neutral-700 text-sm font-normal">
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        className="w-full px-5 py-4 bg-stone-200 rounded-4xl text-stone-900 placeholder:text-neutral-500 outline-none focus:ring-2 ring-green-500 transition-all"
                        onChange={handleEmail}
                    />
                </div>

                <div className="flex flex-col gap-2.5">
                    <label htmlFor="password" dir="ltr" className="ml-1 text-neutral-700 text-sm font-normal">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-5 py-4 bg-stone-200 rounded-4xl text-stone-900 placeholder:text-neutral-500 outline-none focus:ring-2 ring-green-500 transition-all"
                        onChange={handlePassword}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-4 bg-green-500 hover:bg-green-600 rounded-full 
                    text-green-950 text-base font-semibold transition-colors"
                >
                    Sign In
                </button>
            </form>

            {/* Divider */}
            <div className="w-full py-6 flex items-center gap-4">
                <div className="flex-1 h-px bg-stone-300/30" />
                <span className="text-neutral-500 text-xs font-normal uppercase tracking-wider">
                    or
                </span>
                <div className="flex-1 h-px bg-stone-300/30" />
            </div>

            {/* Social Login */}
            <button
                type="button"
                className="w-full py-4 bg-stone-100 border border-stone-300/20 rounded-full flex justify-center items-center gap-3 hover:bg-stone-200 transition-colors"
            >
                <img src={GoogleIcon} alt='Google Sign In' />
                <span className="text-stone-900 text-base font-medium">Continue with Google</span>
            </button>

            {/* Footer */}
            <footer className="mt-8 flex gap-1 text-base">
                <span className="text-neutral-700">New to VoltWise?</span>
                <Link to="/signup" className="text-green-800 font-bold hover:underline">
                    Create an Account
                </Link>
            </footer>
        </main>
    )
}

export default LoginForm
