import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-screen bg-green-200'>
      <h1 className='text-center text-3xl font-semibold'>Register</h1>
      <form className='flex flex-col gap-4 w-[300px] '>
        <input className='w-full border rounded-lg p-3 outline-none' required type="text" name="username" placeholder='enter the username' />
        <input className='w-full border rounded-lg p-3 outline-none' required  type="email" name="email" placeholder='enter your email.' />
        <input className='w-full border rounded-lg p-3 outline-none' required type="password" name="password" placeholder='enter the password' />
        <button className='border-none bg-slate-600 text-white p-3 rounded-lg hover:opacity-90'>Register</button>
      </form>
      <p className='text-slate-600 text-md'>Do you have a account? <Link className='capitalize' to='/login'>click here to Login</Link></p>
    </div>
  )
}

export default Register