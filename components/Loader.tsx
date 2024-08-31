import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex-center h-screen w-full'>
        <Image
           src="/icons/loading-circle.svg"
           alt='loading'
           height={32}
           width={32}
        />
    </div>
  )
}

export default Loader