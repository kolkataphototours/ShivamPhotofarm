"use client"
import React from 'react'

const Gallery = ({ data }) => {
    return (
        <div className='relative -z-20 flex bg-gray-100 py-16 '>
            <div className='w-1/3 '>
                <div className='p-1 pl-2 h-1/3 '>
                    <img key={data[0].id} src={data[0].url} alt={"picture"} className='h-full w-full rounded-b-lg shadow-md' />
                </div>
                <div className='p-1 pl-2 h-1/3'>
                    <img key={data[1].id} src={data[1].url} alt={"picture"} className='h-full w-full rounded-lg shadow-md' />
                </div>
                <div className='p-1 pl-2 h-1/3'>
                    <img key={data[2].id} src={data[2].url} alt={"picture"} className='h-full w-full rounded-t-lg shadow-md' />
                </div>
            </div>

            <div className='w-1/3'>
                <div className='p-1 h-1/4'>
                    <img key={data[3].id} src={data[3].url} alt={"picture"} className='h-full w-full rounded-b-lg shadow-md' />
                </div>
                <div className='p-1 h-1/4'>
                    <img key={data[4].id} src={data[4].url} alt={"picture"} className='h-full w-full rounded-lg shadow-md' />
                </div>
                <div className='p-1 h-1/4'>
                    <img key={data[5].id} src={data[5].url} alt={"picture"} className='h-full w-full rounded-lg shadow-md' />
                </div>
                <div className='p-1 h-1/4'>
                    <img key={data[6].id} src={data[6].url} alt={"picture"} className='h-full w-full rounded-t-lg shadow-md' />
                </div>
            </div>

            <div className='w-1/3'>
                <div className='p-1 pr-2 h-1/3'>
                    <img key={data[7].id} src={data[7].url} alt={"picture"} className='h-full w-full rounded-b-lg shadow-md' />
                </div>
                <div className='p-1 pr-2 h-1/3'>
                    <img key={data[8].id} src={data[8].url} alt={"picture"} className='h-full w-full rounded-lg shadow-md' />
                </div>
                <div className='p-1 pr-2 h-1/3'>
                    <img key={data[9].id} src={data[9].url} alt={"picture"} className='h-full w-full rounded-t-lg shadow-md' />
                </div>
            </div>

        </div>
    )
}

export default Gallery;