"use client"
import Image from 'next/image'
import Link from 'next/link';
import details from '../../data/Films/details.jsx'

const GlassmorphicImage = ({ index }) => {
    return (
        <Link href={`/films/${index}`} class="relative m-4 shadow-lg border-8 shadow-gray-500 border-white rounded-xl overflow-hidden">
            <div className="w-68 h-80 flex items-center justify-center">
                <Image src={require(`../../data/Films/Images/${details[index].link}`)} alt="Your Image" class="w-full h-full object-cover" height={500} width={500} />
            </div>
            <div class="absolute inset-0 bg-black opacity-40"></div>
            <div >
                <p className='flex '>
                    <h1 class=" text-white text-2xl md:text-3xl text-center font-sang  font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {details[index].place}
                        <br/>
                        {details[index].name}
                    </h1>
                    
                </p>


               

            </div>
        </Link>
    );
};

export default GlassmorphicImage;
