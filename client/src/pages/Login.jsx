import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-screen bg-green-200'>
      <h1 className='text-center text-3xl font-semibold'>Login</h1>
      <form className='flex flex-col gap-4 w-[300px] '>
        <input className='w-full border rounded-lg p-3 outline-none' type="text" name="username" placeholder='enter the username' />
        <input className='w-full border rounded-lg p-3 outline-none' type="password" name="password" placeholder='enter the password' />
        <button className='border-none bg-slate-600 text-white p-3 rounded-lg hover:opacity-90'>Login</button>
      </form>
      <p className='text-slate-600 text-md'>Don't have a account? <Link className='capitalize' to='/register'>click here to register</Link></p>
    </div>
  )
}

export default Login