import React from 'react'
import LoginForm from './LoginForm'

function LoginBody() {
    return (
        <main className="w-full px-4 md:px-0 flex items-center justify-center py-16 md:py-24 min-h-[calc(100vh-160px)]">
            <LoginForm />
        </main>
    )
}

export default LoginBody