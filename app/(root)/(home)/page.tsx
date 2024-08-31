import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date()
  const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  const date = now.toDateString();

  return (
    <section className='flex size-full flex-col gap-8 text-white'>
      <div className='h-[250px] w-full rounded-[20px] bg-hero bg-cover'>
        <div className='flex h-full flex-col justify-between max-md:px-3 max-md:py-4 lg:p-7'>
          <h2 className=' max-w-[360px] rounded-xl py-2 text-center text-base font-normal'>Presync- Where creativity meets collaboration</h2>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-extrabold lg:text-4xl'>
              {time}
            </h1>
            <p className='text-md font-medium text-sky-1 lg:text-lg ml-1'>{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList/>
    </section>
  )
}

export default Home