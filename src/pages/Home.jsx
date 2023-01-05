import { Sidebar } from '../components/Sidebar'
import { Chat } from '../components/Chat'

export const Home = () => {
  return (
    <div className='flex bg-lime-200 h-screen items-center justify-center'>
      <div className='flex w-[65%] h-[80%] border-white rounded-lg border overflow-hidden'>
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}
