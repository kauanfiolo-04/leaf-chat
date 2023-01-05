export const Register = () => {
  return (
    <div className='bg-lime-300 w-screen h-screen flex items-center justify-center'>
      <div className='bg-white px-5 py-6 flex flex-col gap-2 rounded-lg items-center'>
        <span className='text-lime-700 text-2xl font-bold'>Leaf Chat</span>
        <span className='text-lime-700 text-sm'>Register</span>
        <form className='flex flex-col gap-4 '>  
          <input className='placeholder:text-gray-400 border-b-[1px] border-solid border-gray-300' type="text" placeholder="display name" />
          <input className='placeholder:text-gray-400 border-b-[1px] border-solid border-gray-300' type="email" placeholder="email" />
          <input className='placeholder:text-gray-400 border-b-[1px] border-solid border-gray-300' type="password" placeholder="password" />
          <input id='file' type="file" className='hidden' />
          <label htmlFor="file" className="flex items-center justify-items gap-5 text-sm text-lime-600">
            <img src="https://img.icons8.com/sf-regular/48/000000/add-image.png" alt='add icon'/>
            <span >Add an avatar</span>
          </label>
          <button className='bg-lime-800 p-3 text-white cursor-pointer rounded-lg  font-bold'>Sign Up</button>
        </form>
        <p className='mt-3'>You do have an account? Login</p>
      </div>
    </div>
  )
}
