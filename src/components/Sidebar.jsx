import { Navbar } from './Navbar'
import { Search } from './Search'
import { Chats } from './Chats'

export const Sidebar=()=>{
  return(
    <div className='flex-[1] bg-lime-700'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}