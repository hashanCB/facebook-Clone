import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import Image from 'next/image'

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )
const lifesite = [
    {
        image:'/logo/1.png',
        text:'Ashani Gunawardhana'
    },
    {
        image:'/logo/2.png',
        text:'Friends'
        },
    {
        image:'/logo/3.png',
        text:'Memories'
    },
    {
        image:'/logo/4.png',
        text:'Saved'
     },
     {
        image:'/logo/5.png',
        text:'Groups'
     },
     {
        image:'/logo/6.png',
        text:'Marketpalce'
     },
     {
        image:'/logo/7.png',
        text:'Feeds'
     },
     {
        image:'/logo/8.png',
        text:'Events'
     },
     {
        image:'/logo/9.png',
        text:'Ads Manager'
     },
     {
        image:'/logo/1.png',
        text:'See more'
     },
]
const Left = () => {
  return (
    <div>
        <ScrollArea className=" mt-15 ">
        
        {lifesite.map((tag,index) => (
        
        <div key={index} className="flex gap-x-4 mx-4 my-2 p-3  hover:bg-[#f0f2f5]">
          <Image src={`${tag.image}`} className=' object-cover' width={30} height={30} alt="Leftside image" />
          <p>{tag.text}</p>
        </div>
     
   
    ))}
        </ScrollArea>
    </div>
  )
}

export default Left