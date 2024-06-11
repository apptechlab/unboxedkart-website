import React from 'react';
import Image from "next/image";


const BlogDetailsScreen = () => {

  return (
     <div className='flex flex-col items-center'>
     <div className="w-full mb-16">
      <div className="relative h-[200px] lg:h-[450px]">
          <Image
            src="/blog_banner.png"
            layout='fill'
            objectFit='cover'
            alt="A website with a question on it"
            className="w-full h-[200px] lg:h-[450px] object-cover"
          />
          <div className="w-full absolute bottom-10 left-1/4">
               <h1 className="text-4xl font-bold mb-2 text-white">Why is refurbished better than new?</h1>
               <h5 className="text-white text-xl">Updated on June 11, 2024</h5>
          </div>
        </div>
      </div>
     <div className='w-[300px] lg:w-[800px] flex flex-col pb-8 pl-12 pr-12 mb-28 text-start'>
     <h3 className='pt-8 text-center pb-12 font-semibold text-2xl'>
     When comparing new versus refurbished tech, refurbished takes the cake. Here’s why.
     </h3>
     <p className='pb-4 font-semibold text-xl'>
     The big picture 
     </p>
     <h4 className='text-justify pb-4 text-xl'>
     We talk a lot about why we think refurbished tech is better than brand-new, but we thought it was time to do a deep dive into exactly why. Ultimately, it comes down to price, quality, and our collective impact on the planet. Of course, there’s a little bit more to the story than that. So whether you’re looking to be convinced or just need a little help explaining to your friends and family, read on.  Why is refurbished better for the planet? 
     </h4>
     <h4 className='text-justify pb-4 text-xl'>
     The three Rs are as true as they were when Big Bird sang them on “Sesame Street”: reduce, reuse, and recycle. Refurbishing (the fourth R, if you will) allows us to do all three. By refurbishing already existing tech, we’re reusing resources already extracted from the planet, while recycling what we can’t reuse. By putting refurbished tech on the market in the same condition as brand new, we’re reducing our collective need to buy new. Of course, the refurbished tech was once new; and it did incur an initial impact on the environment. However, by refurbishing it to like-new condition and using the device over again, refurbished tech mitigates that initial impact and spreads it over the entire lifespan of the device, rather than just a year or two.
     </h4>
     <h4 className='text-justify pb-4 text-xl'>
     Let’s take smartphones, for example. There are four main ways that tech manufacturing impacts the planet: Water waste, raw material extraction, carbon emissions, and the creation of e-waste. In every single category, refurbished tech has significantly less impact on the planet. This means less e-waste piling up and polluting the environment, less carbon emissions in our atmosphere heating our planet, more water retained in its local ecosystem, and more habitats kept intact rather than being destroyed by mining for raw materials. If you’d like to see more data, click here to read more about what refurbished tech means for the planet.
     </h4>
     <h4 className='text-justify pb-4 text-xl'>
     If you’re replacing your current smartphone with a new one every 2.5 years — the average length of time people hang on to their smartphone — that impact is massive. Replace that with a refurbished phone, even with the same timing, and it would take you many more years to make the same environmental impact on the planet as buying new.  Big Tech likes it when their customers only buy new, so they’re historically not invested in making device repair easy for the average person to accomplish. Think about replacing your iPhone battery — most people have to go back to Apple or Samsung or a third-party dealer to get it replaced, rather than do it themselves or go to an independent repair professional. That’s why the Right to Repair movement is so important — to make sure that we are able to use our devices as long as possible, rather than feel forced to buy something new every time a device becomes damaged. 
     </h4>
     <h4 className='text-justify pb-4 text-xl'>
     Another way Big Tech discourages repair is by “part pairing,” or creating an alert in their software that informs you when a non-Apple-certified part was used. Why would corporations implement something like this? To upcharge on their own “certified” replacement parts, and to make you, the customer, worried that something is wrong. It’s a stumbling block set up to keep people buying new, no matter what.  
     </h4>
     </div>
     <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Related articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <article className="relative rounded-lg shadow-md overflow-hidden">
          <div className='flex flex-col'>
          <Image
            src="/iphone.png"
            alt="iPhone Guides"
            width={370}
            height={200}
            className="w-full h-full object-cover"
          />
          <div className=" inset-0 bg-white bg-opacity-20 flex flex-col justify-center  px-4 py-2">
            <h4 className="text-l text-black">iPhone Guides</h4>
            <h2 className='text-xl font-bold pt-2'>
            5 Reasons You Shouldn't Buy a New iPhone
            </h2>
            <p className="text-l text-black mt-2">
              Find out why new iPhones aren't always the best choice.
            </p>
            <a
              href="#"
              className="text-gray hover:underline mt-4 inline-block"
            >
              See more
            </a>
          </div>
          </div>
        </article>
        <article className="relative rounded-lg shadow-md overflow-hidden">
          <div className='flex flex-col'>
          <Image
            src="/iphone.png"
            alt="iPhone Guides"
            width={370}
            height={200}
            className="w-full h-full object-cover"
          />
          <div className=" inset-0 bg-white bg-opacity-20 flex flex-col justify-center  px-4 py-2">
            <h4 className="text-l text-black">iPhone Guides</h4>
            <h2 className='text-xl font-bold pt-2'>
            5 Reasons You Shouldn't Buy a New iPhone
            </h2>
            <p className="text-l text-black mt-2">
              Find out why new iPhones aren't always the best choice.
            </p>
            <a
              href="#"
              className="text-gray hover:underline mt-4 inline-block"
            >
              See more
            </a>
          </div>
          </div>
        </article>
      </div>
      
    </section>
     </div>
  )
}

export default BlogDetailsScreen
