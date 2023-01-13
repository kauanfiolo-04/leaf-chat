export const Input=()=>{
  return(
    <div className='h-[60px] bg-white p-[10px]'>
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src="" alt="" />
        <input className='hidden' type="file" id="file" />
        <label htmlFor="file">
          <img src="" alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}