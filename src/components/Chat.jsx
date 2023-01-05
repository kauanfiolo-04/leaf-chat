const cam="https://img.icons8.com/material-sharp/24/null/video-call--v1.png"
const add="https://img.icons8.com/material-sharp/24/000000/add-user-male.png"
const more="https://img.icons8.com/material-outlined/24/null/more.png"

export const Chat = () => {
  return (
    <div className="flex-[2]">
      <div className='flex items-center justify-between h-[50px] bg-lime-900 p-[10px] text-gray-100'>
        <span>Jane</span>
        <div className="flex gap-[10px]">
          <img className='h-6 cursor-pointer' src={cam} alt='videocall'/>
          <img className='h-6 cursor-pointer' src={add} alt='add'/>
          <img className='h-6 cursor-pointer' src={more} alt='more'/>
        </div>
      </div>
    </div>
  )
}
