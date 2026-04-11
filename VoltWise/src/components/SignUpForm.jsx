import { useState } from "react";
import axios from 'axios';

const SignUpForm = () => {
 const [email, setEmail] = useState("")
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [password, setPassword] = useState("")
 const [confirmPassword, setConfirmPassword] = useState("")
 const [error, setError] = useState("")

 const handleEmail = (event) => {
 setEmail(event.target.value)
 }

 const handleFirstName = (event) => {
 setFirstName(event.target.value)
 }

 const handleLastName = (event) => {
 setLastName(event.target.value)
 }


 const handlePassword = (event) => {
 setPassword(event.target.value)
 }

 const handleConfirmPassword = (event) => {
 setConfirmPassword(event.target.value)
 }

 const handleSignUp = async (event) => {
 event.preventDefault()
 if (!email || !password || !confirmPassword) {
 setError("Error: Please enter email and password")
 return;
 }

 if (password !== confirmPassword) {
 setError("Error: Password mismatch")
 return;
 }

 else {
 setError("")
 try {
 await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/register`, {
 email: email,
 password: password,
 firstName: firstName,
 lastName: lastName
 })
 } catch (err) {
 setError(err?.message ?? "Error during sign up process")
 }
 }
 }

 return (
 <section
 className="w-full max-w-[630px] p-6 md:p-12 bg-white rounded-[32px] md:rounded-[48px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] 
 flex flex-col justify-start items-center mx-auto box-border"
 >
 <header className="text-center mb-10">
 <h1 className="text-stone-900 text-4xl font-extrabold leading-10 mb-2">
 Join the movement
 </h1>
 <p className="text-stone-500 text-xl font-normal leading-7">
 Start your journey toward sustainable stewardship.
 </p>
 </header>

 <form
 className="w-full flex flex-col gap-6"
 onSubmit={handleSignUp}
 >
 {error && (<p className="mt-2 text-red-600 text-sm font-medium animate-in fade-in slide-in-from-top-1">
 {error}
 </p>)}
 <div className="flex flex-col gap-1.5">
 <label htmlFor="email" className="pl-1 text-neutral-700 text-sm font-normal ">Email Address</label>
 <input
 type="email"
 id="email"
 placeholder="name@example.com"
 className="w-full px-5 py-4 bg-stone-200 rounded-4xl text-stone-900 
 placeholder-neutral-500 text-base outline-none focus:ring-2 focus:ring-green-500"
 onChange={handleEmail}
 />
 </div>

 <div className="self-stretch flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-2.5 w-full">
 <div className="flex-1 flex flex-col gap-1.5 w-full">
 <label htmlFor="firstName" className="pl-1 text-neutral-700 text-sm font-normal ">
 First Name
 </label>
 <input
 id="firstName"
 type="text"
 placeholder="First Name"
 className="w-full px-5 py-4 bg-stone-200 rounded-4xl text-stone-900 
 placeholder-neutral-500 text-base outline-none"
 onChange={handleFirstName}
 />
 </div>

 {/* Last Name Group */}
 <div className="flex-1 flex flex-col gap-1.5 w-full">
 <label htmlFor="lastName" className="pl-1 text-neutral-700 text-sm font-normal ">
 Last Name
 </label>
 <input
 id="lastName"
 type="text"
 placeholder="Last Name"
 className="w-full px-5 py-4 bg-stone-200 rounded-4xl text-stone-900 
 placeholder-neutral-500 text-base outline-none"
 onChange={handleLastName}
 />
 </div>
 </div>

 <div className="flex flex-col gap-1.5">
 <label htmlFor="password" className="pl-1 text-neutral-700 text-sm font-normal ">Password</label>
 <input
 type="password"
 id="password"
 placeholder="••••••••"
 className="w-full px-5 py-4 bg-stone-200 rounded-4xl text-stone-900 
 placeholder-neutral-500 text-base outline-none focus:ring-2 focus:ring-green-500"
 onChange={handlePassword}
 />
 </div>

 <div className="flex flex-col gap-1.5">
 <label htmlFor="verify-password" className="pl-1 text-neutral-700 text-sm font-normal ">Verify Password</label>
 <input
 type="password"
 id="verify-password"
 placeholder="••••••••"
 className="w-full px-5 py-4 bg-stone-200 rounded-4xl text-stone-900 
 placeholder-neutral-500 text-base outline-none focus:ring-2 focus:ring-green-500"
 onChange={handleConfirmPassword}
 />
 </div>

 <button
 type="submit"
 className="w-full py-4 mt-2 bg-green-500 hover:bg-green-600 transition-colors rounded-full text-green-950 
 text-base font-bold "
 >
 Create Account
 </button>
 </form>

 <div className="w-full flex items-center my-6">
 <hr className="flex-1 border-stone-300/30" />
 <span className="px-4 text-neutral-500 text-xs font-normal uppercase tracking-wider">or</span>
 <hr className="flex-1 border-stone-300/30" />
 </div>

 <button className="w-full py-4 bg-stone-100 rounded-full border border-stone-300/20 flex justify-center items-center gap-3 hover:bg-stone-200 transition-colors">
 <span className="w-5 h-5 bg-neutral-200"></span>
 <span className="text-stone-900 text-base font-medium ">Continue with Google</span>
 </button>

 <footer class="mt-6 text-center">
 <p class="text-neutral-700 text-base font-normal ">
 Already have an account?
 <span class="text-green-800 font-bold hover:underline">Sign In</span>
 </p>
 </footer>
 </section>
 )
}

export default SignUpForm
