export const Navbar=()=>{
  return(
    <div className='flex bg-lime-900 items-center h-[50px] p-2 justify-between text-gray-100'>
      <span className='font-bold'>Leaf Chat</span>
      <div className='flex gap-3'>
        <img className='bg-gray-100 h-6 w-6 rounded-[50%] object-cover' src="" alt="" />
        <span>Jão</span>
        <button className="bg-lime-700 text-xs cursor-pointer">logout</button>
      </div>
    </div>
  )
}