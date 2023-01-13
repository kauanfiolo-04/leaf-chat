import { Messages } from "./Messages"
import { Input } from './Input'

const add="https://img.icons8.com/material-sharp/24/000000/add-user-male.png"
const more="https://img.icons8.com/material-outlined/24/null/more.png"

export const Chat = () => {
  return (
    <div className="flex-[2]">
      <div className='flex items-center justify-between h-[50px] bg-lime-900 p-[10px] text-gray-100'>
        <span>Jane</span>
        <div className="flex gap-[10px]">
          <svg className="h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"  viewBox="0 0 24 24" width="24" height="24"><path d="M22.925,5.695c-.663-.332-1.443-.262-2.037,.183l-1.939,1.877c-.365-2.681-2.669-4.755-5.449-4.755H5.5C2.467,3,0,5.467,0,8.5v7c0,3.033,2.467,5.5,5.5,5.5H13.5c2.772,0,5.071-2.061,5.446-4.731l1.942,1.841c.346,.258,.753,.391,1.165,.391,.335,0,.672-.087,.98-.265,.63-.364,.967-1.088,.967-1.816V7.434c0-.741-.412-1.408-1.075-1.739Zm-6.925,9.805c0,1.378-1.122,2.5-2.5,2.5H5.5c-1.378,0-2.5-1.122-2.5-2.5v-7c0-1.378,1.122-2.5,2.5-2.5H13.5c1.378,0,2.5,1.122,2.5,2.5v7Zm-2.5-3.5c0,.829-.671,1.5-1.5,1.5h-1v1c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5v-1h-1c-.829,0-1.5-.671-1.5-1.5s.671-1.5,1.5-1.5h1v-1c0-.829,.671-1.5,1.5-1.5s1.5,.671,1.5,1.5v1h1c.829,0,1.5,.671,1.5,1.5Z"/></svg>
          <img src={add} className="h-6 cursor-pointer" alt="add-user" />
          <img className='h-6 cursor-pointer' src={more} alt='more'/>
        </div>  
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
