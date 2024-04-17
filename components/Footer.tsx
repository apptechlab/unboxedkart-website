import { FOOTER_AREAS, FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container xc flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
          <h1 className="font-bold text-blue-800 text-2xl">
          Unboxedkart
          </h1>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div className="flex flex-col">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        {/* for web view in mobile */}
        <div className='space-y-8 py-8 padding-container lg:hidden mb-4'>
        <h1 className='text-center text-lg text-blue-900'>
          Our Services are available all across Bengaluru, Karnataka
        </h1>
        <div className="flex-col">
                  {FOOTER_AREAS.map((groups, index) => 
                    <p key={index}>
                      {groups.links.map((places, index) => 
                      <span key={index} className='text-gray-500'>
                        {places}{`, `}
                      </span>
                      )}
                    </p>
                  )}
            </div>
        </div>
        {/* for web view in desktop */}
        <div className='space-y-8 py-8 hidden lg:block'>
        <h1 className='text-center text-2xl text-blue-900'>
          Our Services are available all across Bengaluru, Karnataka
        </h1>
        <div className="flex gap-20 flex-row ">
                  {FOOTER_AREAS.map((groups, index) => 
                    <ul key={index}>
                      {groups.links.map((places, index) => 
                      <p key={index} className='text-gray-500'>
                        {places}
                      </p>
                      )}
                    </ul>
                  )}
            </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2024 Unboxedkart powered by Apptechlab | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title?: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer