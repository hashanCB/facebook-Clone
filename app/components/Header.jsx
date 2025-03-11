import { EggFriedIcon, Home, Search ,UsersRound,TvMinimalPlay,Store,Gamepad2, Logs, Bell ,MessageCircleCode ,ChevronDown} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className=' max-w-screen bg-white shadow-2xl h-[55px] flex flex-row pl-2 '>


    <div className='flex flex-3/12 bg-white gap-2  items-center pl-2  '>

    {/* facebook logo */}
    <div className=' fixed max-w-[40px]  max-h-[40px]'><Image  className=" " src={`/logo/facebook-logo.png`}  width={40} height={40} alt='logo'  /></div>

    <div className='flex flex-row bg-[#f0f2f5] rounded-3xl m-1 ml-12 gap-2 h-[40px] items-center px-3 w-full max-w-md'> 
    {/* Search Icon */}
    <Search className='text-gray-500 w-[18px]' />
    
    {/* Input Field */}
    <input 
        type='text' 
        placeholder='Search Facebook'  
        className='flex-grow flex-shrink-0 bg-transparent focus:outline-none text-gray-800' 
    />
    </div>

    </div> 

 



    <div className=' flex flex-6/12 gap-x-10 justify-center items-center'> 
    <div className=' flex w-25 justify-center border-b-[#0766ff] border-b-4  h-full relative group'>
    <Home className=' text-[#0766ff] h-full w-6'/> 
    <span className=' absolute hidden -bottom-10 left-5.5 bg-zinc-500 text-white p-1 rounded-xl group-hover:block'>Home</span>
    </div>
  
    <div className=' flex w-25 justify-center  h-full relative group'>
    <UsersRound className=' text-gray-500 h-full w-6'/> 
    <span className=' absolute hidden -bottom-10 left-5.5 bg-zinc-500 text-white p-1 rounded-xl group-hover:block'>Friends</span>
    </div>

    <div className=' flex w-25 justify-center  h-full relative group'>
    <TvMinimalPlay className=' text-gray-500 h-full w-6'/> 
    <span className=' absolute hidden -bottom-10 left-5.5 bg-zinc-500 text-white p-1 rounded-xl group-hover:block'>Videos</span>
    </div>
    <div className=' flex w-25 justify-center  h-full relative group'>
    <Store className=' text-gray-500 h-full w-6'/> 
    <span className=' absolute hidden -bottom-10 left-2 bg-zinc-500 text-white p-1 rounded-xl group-hover:block'>Marketplace</span>
    </div>
    <div className=' flex w-25justify-center  h-full relative group'>
    <Gamepad2 className=' text-gray-500 h-full w-6'/> 
    <span className=' absolute hidden -bottom-10 -left-3 bg-zinc-500 text-white p-1 rounded-xl group-hover:block'>Games</span>
    </div>


    </div>   

    <div className=' flex flex-3/12  gap-3 items-center justify-end pr-3 '>

    <div className=' flex w-[40px] bg-[#e3e5e9] rounded-full h-[40px] items-center justify-center'>
        <Logs/>
    </div>

    <div  className=' flex w-[40px] bg-[#e3e5e9] rounded-full h-[40px] items-center justify-center'>
    <MessageCircleCode  />
    </div>

    <div  className=' flex w-[40px] bg-[#e3e5e9] rounded-full h-[40px] items-center justify-center relative group'>
    <Bell /> 
    <span className=' absolute -top-1 -right-1 w-[18px] h-[18px] text-sm text-white bg-red-500 rounded-full items-center justify-center flex '>2</span>
    </div>
 
    <div  className=' flex w-[40px] bg-[#e3e5e9] rounded-full h-[40px] items-center justify-center relative'>
        <Image src={`/logo/profile.jpg`}  width={40} height={40} className=' object-cover rounded-full' />
        <ChevronDown  className=' absolute bg-[#e3e5e9] bottom-0 right-0 w-[15px] h-[15px] rounded-full border-2 border-white' />
        <span className=' absolute top-0 right-0  border-1 border-white w-[12px] h-[12px]  bg-red-500 rounded-full items-center justify-center flex '></span>
    </div>
    
    </div>


    </div>
  )
}

export default Header