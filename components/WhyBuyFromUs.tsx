import { BUY_FROM_US, REVIEWS } from '@/constants'
import Image from 'next/image'

const Repair = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24 pt-12">
        <Image src="gadgets.svg" alt="camp" width={80} height={80} />
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[420px] text-blue-700">
            Why<br/>
            buy from us?
          </h2>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
      <div className="flex flex-row space-x-24">
     {BUY_FROM_US.map((buyFromUs, index) => 
     <div className="flex flex-col mb-12 mt-8">
     <div className="overflow-hidden relative lg:w-[350px] text-white flex flex-col items-center w-[200px] text-center">
     <div className="flex items-center gap-2 pb-6">
     <Image 
                    src={buyFromUs.image}
                    key={index}
                    alt="unboxedkart"
                    width={120}
                    height={120}
      />
    </div>
    <h4 className="text-[22px] pb-6 text-blue-700">
          {buyFromUs.title}
    </h4>
    <h4 className="text-[26px] pb-6 text-black">
    {buyFromUs.description}
    </h4>
     </div>
     </div>
     )}
     </div>
      </div>
    </section>
  )
}

export default Repair