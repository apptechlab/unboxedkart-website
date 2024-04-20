import React from 'react'
import Image from 'next/image'

const Promotion = () => {

  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-54 xl:max-w-[320px]">Shop as your
          comfort</h2>
          <p className="regular-16 text-gray-10">Shopping on unboxedkart are now so much easier, with the
          world's top brands at your fingertips. Simply click and go to
          discover the best finds in electronics more!</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <a className='flex h-12 rounded-full items-center justify-center font-medium px-4 lg:px-8 text-base md:text-lg lg:text-xl !leading-none bg-white text-blue-80 space-x-2 w-44 lg:w-52 transition-all duration-300 hover:scale-[1.02]' href="https://play.google.com/store/apps/details?id=com.unboxedkart&hl=en&gl=US">
              <img className='pr-[8px]' loading='lazy' height={28} width={26} src="playstore.png" alt="download on playstore" decoding='async'/>
              Play Store
              </a>
              <a className='flex h-12 rounded-full items-center justify-center font-medium px-4 lg:px-8 text-base md:text-lg lg:text-xl !leading-none bg-white text-blue-80 space-x-2 w-44 lg:w-52 transition-all duration-300 hover:scale-[1.02]' href="https://apps.apple.com/in/app/unboxedkart/id1550972969">
              <img className='pr-[8px]' loading='lazy' height={28} width={26} src="appstore.png" alt="download on playstore" decoding='async'/>
              App Store
              </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="playstore.svg" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  )
}

export default Promotion