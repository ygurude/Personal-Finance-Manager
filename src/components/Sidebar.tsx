'use client';

import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation';
import Footer from './Footer';
import PlaidLink from './PlaidLink';


const Sidebar = ({ user }: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
        <nav className="flex flex-col gap-4">
            <Link href="/dashboard"
            className="mb-12 cursor-pointer flex items-center gap-2">
                <Image 
                    src="/lion.svg"
                    width = {34}
                    height = {34}
                    alt ="Dhan Icon"
                    className="size-[24px] max-xl:size-14 "    
                />

                <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-blue-900 max-xl:hidden">
                    Dhan
                </h1>
            </Link>

            {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                    return ( 
                        <Link href={item.route} key ={item.label} className={cn('flex gap-3 items-center py-1 md:p-3 2xl:p-4 rounded-lg justify-center xl:justify-start', {'bg-teal-600':isActive})}>

                            <div className="relative size-6">
                                <Image 
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={cn({'brightness-[3] invert-0': isActive})}
                                />
                            </div>
                            <p className={cn('text-16 font-semibold text-black max-xl:hidden', {'!text-white': isActive})}>
                                {item.label}
                            </p>

                        </Link>
                    )
                })}
            <PlaidLink user={user}/>
        </nav>

        <Footer 
            user={user}
        />
    </section>
  )
}

export default Sidebar