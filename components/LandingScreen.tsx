import { REVIEWS } from "@/constants";
import Image from "next/image";


const LandingScreen = () => {
  return (
    <div className="bg-[#004aad] flex flex-col items-center">
     <div className='overflow-hidden relative lg:h-[1200px] text-white flex justify-center  h-[400px]'>
          <div className='lg:flex lg:justify-center pb-10 overflow-x-hidden'>
               <div className='flex flex-col items-center w-full lg:items-center lg:flex-row lg:justify-between lg:max-w-7xl px-4 lg:px-8'>
               <div className='relative w-[325px] lg:w-[800px] lg:mr-8 mb-8 lg:mb-12 lg:mt-40'>
                    {<Image src='certify_repair.svg' alt='cerify_repair' width={2240} height={2240} />}
               </div>
               <div className='w-full flex flex-col items-center'>
                    <div className="text-left">
                    <h3 className='text-[12px] lg:text-[20px] font-light leading-none lg:block mr-2 text-textPrimary text-left lg:text-left'>
                         Premium Products. Affordable Prices
                    </h3>
                    <h2 className='text-[40px] lg:text-[120px] font-light leading-none lg:block mr-2 text-textPrimary mt-8'>
                         Buy<br/>​Certified<br/>Pre-owned<br/>Apple<br/>​Products
                    </h2>
                    </div>
               </div>
               </div>
           </div>  
     </div>
     <div className="w-[325px] lg:w-[1200px] flex flex-col bg-yellow-300 rounded-lg pb-8 pl-12 mb-28 items-center">
          <div>
          <h2 className='text-[40px] lg:text-[120px] font-light leading-none lg:block mr-2 text-textPrimary mt-8'>
          <span className="font-bold">
            Not{' '}
            <span className="line-through">Refurbished</span>,<br></br>
          </span>
          <span className="font-bold">
            It's Unboxed.
          </span>
          </h2>
          <h2 className='text-[40px] lg:text-[120px] leading-none lg:block mr-2 text-textPrimary mt-8 font-bold'>
          So Nothing lost,<br/>
          Everything is a gain.
          </h2>
          </div>
     </div>
     <div className="flex flex-col items-center w-full">
          <h2 className="text-[36px] lg:text-[90px] font-light leading-none lg:block mr-2 text-textPrimary mt-8 text-white">
               What our customer say..
          </h2>
     <div className="flex flex-row space-x-12">
     {REVIEWS.map((reviews, index) => 
     <div className="flex flex-col mb-12 mt-8">
     <div className="overflow-hidden relative lg:w-[350px] text-white flex flex-col items-center w-[200px] text-center">
     <div className="flex items-center gap-2 pb-6">
          {Array(reviews.stars).fill(1).map((_, index) => (
               <Image 
                    src="star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
               />
          ))}
    </div>
    <h4 className="text-[24px] pb-6">
          {reviews.review}
    </h4>
    <h4 className="text-[26px] pb-6">
    - {reviews.name}
    </h4>
     </div>
     </div>
     )}
     </div>
     </div>
    </div>
  )
}

export default LandingScreen
