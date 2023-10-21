import React from 'react'
import shivamPic from "../../data/About/Images/shivam.png"
import Image from 'next/image'

const AboutMain = () => {
  return (
    <div>
      <div className=' w-full  flex justify-center my-12  '>
        <div className='grid  lg:grid-cols-3 w-2/3   my-8  lg:w-3/5 gap-0  shadow-2xl rounded-lg	 lg:rounded' >
          <div className="h-80 lg:h-full  lg:w-11/12  relative">
            <Image className="h-80 lg:h-full  w-[100] object-cover" src={shivamPic} alt="pic" />
            {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-black bg-opacity-50 flex items-center justify-around">
              <Link href={shivamLink.Facebook} target="_blank">
                <i className="fa fa-facebook icon text-white text-2xl hover:text-[#1877F2]" />
              </Link>
              <Link href={shivamLink.Website} target="_blank">
                <i className="fa fa-whatsapp icon text-white text-2xl hover:text-[#25D366]" />
              </Link>
              <Link href={shivamLink.Behance} target="_blank">
                <i className="fa fa-behance icon text-white text-2xl hover:text-[#1769FF]" />
              </Link>
              <Link href={shivamLink.Instagram} target="_blank">
                <i className="fa fa-instagram icon text-white text-2xl hover:text-[#E4405F]" />
              </Link>
              <Link href={shivamLink.Youtube} target="_blank">
                <i className="fa fa-youtube icon text-white text-2xl hover:text-[#FF0000]" />
              </Link>
            </div> */}
          </div>

          <div className='col-span-2 flex w-full items-center  tracking-wide '>
            <p className='text-left md:p-4 h-fit w-full font-sang text-sm font-thin '>Hi, I’m Jared a professional photographer, filmmaker, and visual storyteller.I was born and raised in the sunshine capital of New Zealand, Marlborough. This picturesque region is my place to belong and the sense of family and tradition this place has to me has been a key influence in my visual work.
              In my time as a professional filmmaker and photographer, I’ve scaled mountain tops, rigged camera’s out of cars, and battled tropical climates to get just the right shot. The places I’ve been and the people I’ve met has inspired me to humbly tell the stories of others.This is something I can offer you. Whether it’s telling the story of your conscious brand, showcasing the impact behind your product or capturing your own adventure or event, I’m here to help.
              I look forward to hearing from you.. <p className='text-end font-bold'>Jared</p></p>

          </div>
          


        </div>
      </div>
    </div>
  )
}

export default AboutMain  