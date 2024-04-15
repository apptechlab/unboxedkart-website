import React from 'react'
import Image from "next/image"
import Button from './Button'

const Hero = () => {
  return (
     <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">

     <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
       <Image 
         src="gadgets.svg"
         alt="gadgets"
         width={60}
         height={60}
         className="absolute left-[-5px] top-[-40px] w-30 lg:w-[80px] lg:top-[-45px]"
       />
       <h1 className="bold-52 lg:bold-88">Certified refurbished Apple products</h1>
       <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
       Discover unbeatable deals on certified refurbished Apple products at UnboxedKart! Our carefully inspected and certified refurbished iPhones, iPads, MacBooks, and more offer exceptional quality at irresistible prices. Shop now for guaranteed performance and savings, only at UnboxedKart!
       </p>

       <div className="my-11 flex flex-wrap gap-5">
         <div className="flex items-center gap-2">
           {Array(5).fill(1).map((_, index) => (
             <Image 
               src="star.svg"
               key={index}
               alt="star"
               width={24}
               height={24}
             />
           ))}
         </div>

         <p className="bold-16 lg:bold-20 text-blue-70">
           500+
           <span className="regular-16 lg:regular-20 ml-1">Satisfied customers</span>
         </p>
       </div>

       <div className="flex flex-col w-full gap-3 sm:flex-row">
         <Button 
           type="button" 
           title="Download App" 
           variant="btn_blue_secondary" 
         />
         <Button 
           type="button" 
           title="Review by customers" 
           icon="play.svg"
           variant="btn_white_text" 
         />
       </div>
     </div>

     <div className="relative flex flex-1 items-start">
          {/* image or naimation */}
     </div>
   </section>
  )
}

export default Hero
