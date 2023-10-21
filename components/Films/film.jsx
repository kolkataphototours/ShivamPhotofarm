import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import details from '../../data/Films/details.jsx'
const Films = () => {
  return (
    <div>
      <div class="flex justify-center items-center">
  <div class="grid grid-cols-2 gap-4">
   
     {details.map((detail, index) => (
        <Link href={`/films/${index}`} key={index}>
          <Image
            src={require(`../../data/Films/Images/${detail.link}`)}
            className="d-block h-60 w-96  object-cover"
            alt={detail.text}
            height={200}
             width={200}
          />
        </Link> 
      ))}
     
  </div>
</div>

      <div className=' flex justify-center'>
        <div className=' flex flex-col w-3/5   mt-12'>
          <p className=' text-center text-lg md:text-xl'>
            “We are so happy with the wedding video we received from Be Joined Films. Jared was so easy to work with, a wedding videographer who really created a unique recount of our wedding day capturing the parts we loved the most. The way he wove our vows within the film really represented us as a couple, it will be just as magical to watch in the years to come as a family.”
          </p>

       <p className='text-end font-bold text-lg'>- The Taylors</p>
        </div>
      </div>
    </div>
  )
}

export default Films