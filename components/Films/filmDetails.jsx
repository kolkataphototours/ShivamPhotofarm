import React from 'react'
import details from '@/data/Films/details'
const FilmDetails = ({ id }) => {

    return (
        <div>
            <div className="flex  justify-center h-[300px] sm:h-[500px] md:h-screen">
                <iframe
                    className="w-4/5 h-4/5  rounded-lg"
                    src={'https://www.youtube.com/embed/lCX9fgo5y-I'}
                    // src={`${youtube1.url}?rel=0`}
                    title="YouTube Video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>


            </div>
            <div className='flex flex-col text-center '>

                <h1>{details[id].place}</h1>
                <h1>{details[id].name}</h1>

            </div>
            <div className='border-4 flex justify-center'>
                <div className='w-3/5 border-4 text-center'>{details[id].text}</div>

            </div>
        </div>
    )
}

export default FilmDetails