"use client";

import { FAQS } from '@/constants';
import React, { useState } from 'react';

const Faq = () => {
     const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

     const toggleExpand = (index: number | null) => {
          setExpandedIndex(index === expandedIndex ? null : index);
     };
  return (
     <section>
     <div className='w-full flex flex-col items-center text-center'>
         <h2 className='text-[32px] lg:text-[60px] font-light leading-none lg:block mr-2 text-textPrimary'>
         FAQs
         </h2>
         <div className='lg:mx-0 h-[2px] mt-5 w-40 bg-blue-800'></div>
     </div>
    <div className='mt-8 mx-auto max-w-3xl'>
         {FAQS.map((steps, index) => <div className='py-3 border-b border-border cursor-pointer'>
              <div className='flex items-center'>
                   <div onClick={() => toggleExpand(index)} className='ml-2 lg:ml-8 flex-1 flex items-center justify-between w-18 lg:w-24 h-20 lg:h-24'>
                        <h3 className='text-l lg:text-xl font-semibold text-primary text-blue-80'>
                        {steps.title}
                        </h3>
                        <p className='pr-5 flex items-center justify-center'>
                        {(expandedIndex !== index) && (<svg width="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13V7M7 7V1M7 7H13M7 7H1" stroke="#004aad" stroke-width="2" stroke-linecap="round"></path></svg>)}
                        {(expandedIndex === index) && (<svg width="12" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H12" stroke="#004aad" stroke-width="2" stroke-linecap="round"></path></svg>)}
                        </p>
                   </div>
              </div>
              {(expandedIndex === index) && (
                   <div className='space-y-6 transition-all duration-500 opacity-100 max-h-96 overflow-visible visible my-4'>
                   <div className='flex items-start mx-3'>
                   {steps.description}
                   </div>
              </div>
              )}
         </div>)}
    </div>
     </section>
  )
}

export default Faq
