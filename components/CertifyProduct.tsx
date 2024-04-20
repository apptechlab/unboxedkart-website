"use client";
import { STEPS_TO_CERTIFY } from '@/constants';
import React, { useState } from 'react';
import Image from "next/image";

const CertifyProduct = () => {
     const [expanded, setExpanded] = useState(false);
     const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

     const toggleExpand = (index: number | null) => {
          setExpanded(!expanded);
          setExpandedIndex(index === expandedIndex ? null : index);
     };

  return (
     <div className='lg:flex lg:justify-center pb-10 overflow-x-hidden'>
     <div className='flex flex-col items-center w-full lg:items-center lg:flex-row lg:justify-between lg:max-w-7xl px-4 lg:px-8'>
     <div className='relative w-[325px] lg:w-[620px] lg:mr-8 mb-8 lg:mb-12 lg:mt-40'>
     {<Image src='certify_repair.svg' alt='cerify_repair' width={2240} height={2240} />}
     </div>
     <div className='flex-1 mt-4 lg:max-w-xl lg:mt-0'>
      <div className='class="w-full flex flex-col items-center text-center lg:text-left"'>
          <h2 className='text-[32px] lg:text-[60px] font-light leading-none lg:block mr-2 text-textPrimary'>
          How we Certify a Product Before Listing It for Sale?
          </h2>
          <div className='lg:mx-0 h-[2px] mt-5 w-40 bg-blue-800'></div>
      </div>
      <h2 className='px-4 lg:px-0 font-varela lg:text-xl lg:leading-relaxed text-center lg:text-left text-textPrimary mt-6'>
      At Unboxedkart, we understand the importance of quality when it comes to refurbished gadgets. Each device that passes through our hands undergoes rigorous testing and evaluation to ensure it meets our high standards before being listed for sale. Here's a glimpse into our certification process:
     </h2>
     <div className='mt-4'>
          {STEPS_TO_CERTIFY.map((steps, index) => <div className='py-3 border-b border-border cursor-pointer'>
               <div className='flex items-center'>
                    <div onClick={() => toggleExpand(index)} className='ml-2 lg:ml-8 flex-1 flex items-center justify-between w-18 lg:w-24 h-20 lg:h-24'>
                         <h3 className='text-l lg:text-xl font-semibold text-primary text-blue-80'>
                         {steps.title}
                         </h3>
                         <p className='pr-5 flex items-center justify-center'>
                         {(!expanded || expandedIndex !== index) && (<svg width="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13V7M7 7V1M7 7H13M7 7H1" stroke="#004aad" stroke-width="2" stroke-linecap="round"></path></svg>)}
                         {(expanded && expandedIndex === index) && (<svg width="12" viewBox="0 0 13 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1H12" stroke="#004aad" stroke-width="2" stroke-linecap="round"></path></svg>)}
                         </p>
                    </div>
               </div>
               {(expanded && expandedIndex === index) && (
                    <div className='space-y-6 transition-all duration-500 opacity-100 max-h-96 overflow-visible visible my-4'>
                    <div className='flex items-start mx-3'>
                    {steps.description}
                    </div>
               </div>
               )}
          </div>)}
     </div>
     </div>
     </div>
     </div>
  )
}

export default CertifyProduct
