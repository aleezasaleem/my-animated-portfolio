import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const data=[{
    image:'/panaverse.PNG',
    link:'https://panaverse-daoclone--lime.vercel.app/'
},
{
    image:'/todo.PNG',
    link:'https://todolist-nextjs-livid.vercel.app/'
},
{
    image:'/ecommerce.PNG',
    link:'https://e-commerce-shop-wine.vercel.app/'
},{
    image:'/cloudinary.PNG',
    link:'https://photo-album-drab.vercel.app/'
},
{
    image:'/virtualweb.JPG',
    link:'https://virtual-r-seven.vercel.app/'
},{
    image:'/website2.JPG',
    link:'https://seaside-escape-gateways.vercel.app/'
},{
    image:'/sportweb.JPG',
    link:'https://sportswebsite.vercel.app/'
},{
    image:'/webdev.JPG',
    link:'https://agencywebsite-xi.vercel.app/'
}]

const Work = () => {
  return (
    <div data-aos="fade-up" className='flex items-center justify-center'>
<div>
<h1  data-aos="fade-up-right" className='text-5xl lg:text-6xl font-bold text-center py-6
'>Work</h1>
 
  <div data-aos="fade-in" className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 py-4 w-auto px-4'>
    {data.map((item,i)=>{
        return(<Link  data-aos="fade-up-right" href={item.link} target='_main'>
        <Image  src={item.image} alt="" width={600} height={600} className='rounded-xl hover:scale-105 opacity-50 transition duration-300 ease-in-out transform'/>
        
    </Link>)
    })}
                
               
              
               
            </div>
</div>

    </div>
  )
}

export default Work