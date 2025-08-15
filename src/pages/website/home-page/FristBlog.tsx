import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FristBlog = () => {
    return (
        <div className='  ' >
            <div className='  ' >
                <Image src={"/images/blogs/recents/recent-1.jpg"} width={500} height={500} alt='first blog ' className='' />
            </div>
            <div className=' my-3 ' >
                <h1 className=' lg:text-2xl text-2xl font-semibold   ' >Home Internet Is Becoming a Luxury for the Wealthy</h1>
                <p className=' text-gray-500 my-4 ' >
                    And black on meretriciously regardless well fearless irksomely as about h_ideous wistful bat less oh much and occasional useful rat darn jeepers far.
                </p>
                <p className=' text-gray-500  my-1 flex flex-row items-center gap-x-3  ' >
                    Dave Gershgorn
                    in
                    tech
                    •
                    May 21
                    •
                    5 min read
                    <span>
                        <Star size={16}  /> 
                    </span>

                </p>
                <button className=' py-3 px-4 border border-black cursor-pointer my-3 ' >All Featured</button>
            </div>
        </div>
    )
}

export default FristBlog