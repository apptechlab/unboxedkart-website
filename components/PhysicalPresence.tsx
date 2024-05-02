import { PHYSICAL_PRESENCE } from '@/constants'
import Image from 'next/image'

const PhysicalPresence = () => {
  return (
    <div className='w-full flex flex-col items-center text-center pt-24 pb-24 text-blue-800'>
      <div>
      <h2 className='text-[32px] lg:text-[54px] font-bold leading-none lg:block mr-2 text-textPrimary'>
      OUR<br/>PHYSICAL PRESENCE
     </h2>
     <div className='lg:mx-0 h-[2px] mt-5 w-400 bg-blue-800'></div>
     </div>
     <h2 className='pt-8 text-[18px] lg:text-[22px] font-normal leading-none lg:block mr-2 text-textPrimary'>
     We setup physical stores across states to make shopping experience easier & safer for our customers
     </h2>
     <div className="flexCenter max-container relative w-full pt-16">
      <div className="grid grid-rows-1 lg:grid-cols-3 lg:gap-4">
     {PHYSICAL_PRESENCE.map((physicalPresence, index) => 
     <div className="flex flex-col mb-8 lg:mb-12 lg:mt-8">
     <div className="overflow-hidden relative lg:w-[350px] text-white flex flex-col items-center w-[200px] text-center">
     <div className="flex items-center gap-2 lg:pb-6">
     <Image 
                    src={physicalPresence.image}
                    key={index}
                    alt="unboxedkart"
                    width={240}
                    height={240}
      />
    </div>
    <h4 className="text-[24px] pb-6 text-blue-700 font-semibold">
          {physicalPresence.title}
    </h4>
     </div>
     </div>
     )}
     </div>
      </div>
    </div>
  )
}

export default PhysicalPresence
