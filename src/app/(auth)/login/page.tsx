import React from 'react'
import AuthForm from '@/components/AuthForm'

const LogIn = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">

      <AuthForm
        type="log-in"
      />

    </section>
  )
}

export default LogIn