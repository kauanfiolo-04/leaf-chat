export const Search=()=>{
  return(
    <div  className='border-b-[1px] border-solid border-gray-50'>
      <div className='p-2'>
        <input type="text" placeholder='Find a user' 
          className='bg-transparent text-white placeholder:text-gray-100 outline-none'
        />
      </div>
      <div className='flex p-[10px] items-center gap-3 text-white cursor-pointer'>
        <img className='object-cover h-[50px] w-[50px] rounded-[50%]'
          src="https://images.pexels.com/photos/14844856/pexels-photo-14844856.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
          alt="user avatar" 
        />
        <div>
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}