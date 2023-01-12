export const Navbar=()=>{
  return(
    <div className='flex bg-lime-800 items-center h-[50px] p-[10px] justify-between text-gray-100'>
      <span className='font-bold'>Leaf Chat</span>
      <div className='flex gap-2'>
        <img className='bg-gray-100 h-6 w-6 rounded-[50%] object-cover' 
          src="https://images.pexels.com/photos/4371747/pexels-photo-4371747.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="user avatar" 
        />
        <span>Jão</span>
        <button className="bg-lime-600 text-xs p-1 text-gray-100 cursor-pointer rounded-sm">logout</button>
      </div>
    </div>
  )
}