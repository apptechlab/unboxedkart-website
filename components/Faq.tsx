"use client";

import { FAQS } from '@/constants';

const Faq = () => {
  return (
     <section className='bg-blue-800 pt-12 pb-12 items-center lg:items-start lg:justify-center text-white flex flex-col lg:flex-row'>
     <div className='w-[325px] lg:w-[580px] pl-24'>
         <h2 className='text-[32px] lg:text-[60px] font-light leading-none lg:block mr-2 text-textPrimary'>
         Frequently<br/>
         Asked<br/>
         Questions<br/>
         </h2>
     </div>
    <div className='w-[325px] lg:w-[740px] '>
         {FAQS.slice(0, 4).map((steps, index) => <div className='py-6 cursor-pointer'>
              <div className='flex items-center'>
                   <div className='flex-1 flex items-center justify-between w-18 lg:w-24 '>
                        <h3 className='text-l lg:text-2xl font-semibold text-primary text-white'>
                        {steps.title}
                        </h3>
                   </div>
              </div>
              <div className='text-lg my-4'>
                   <div className='flex items-start'>
                   {steps.description}
                   </div>
              </div>
         </div>)}
    </div>
     </section>
  )
}

export default Faq
