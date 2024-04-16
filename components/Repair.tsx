import Image from 'next/image'

const Repair = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="gadgets.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-blue-800">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Why buy from us?</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">UnboxedKart offers a compelling reason to choose refurbished or used phones with confidence. Our meticulously inspected devices undergo rigorous testing to ensure they meet high-quality standards, providing reliability at a fraction of the cost. With UnboxedKart, customers enjoy not only substantial savings but also peace of mind, knowing they're making an eco-conscious choice by giving electronics a second life. Experience premium devices without the premium price tag, only at UnboxedKart.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="repair.svg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Sell</p>
                <p className="bold-12 text-blue-400">at 20-30% off</p>
              </div>
              <p className="bold-20 mt-2">Certified refurbishing</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Start testing</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Buy product</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Repair