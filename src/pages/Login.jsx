export const Login=()=>{
  return(
    <div className='bg-lime-300 w-screen h-screen flex items-center justify-center'>
      <div className='bg-white px-5 py-6 flex flex-col gap-2 rounded-lg items-center'>
        <span className='text-lime-700 text-2xl font-bold'>Leaf Chat</span>
        <span className='text-lime-700 text-sm'>Login</span>
        <form className='flex flex-col gap-4 '>  
          <input className='placeholder:text-gray-400 border-b-[1px] border-solid border-gray-300' type="email" placeholder="email" />
          <input className='placeholder:text-gray-400 border-b-[1px] border-solid border-gray-300' type="password" placeholder="password" />
          <button className='bg-lime-800 p-3 text-white cursor-pointer rounded-lg  font-bold'>Sign in</button>
        </form>
        <p className='mt-3'>You don't have an account? Register</p>
      </div>
    </div>
  )
}