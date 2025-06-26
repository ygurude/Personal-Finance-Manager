"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { sidebarLinks } from "@/constants"
import { SheetClose } from "@/components/ui/sheet";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Footer from "./Footer";

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
    return (
    <section className="w-full max-w-[264px]">
        <Sheet>
            <SheetTrigger>
                <Image 
                    src="/menu.svg"
                    width={30}
                    height={30}
                    alt="menu"
                    className="cursor-pointer md:hidden"
                />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-white">
                <Link href="/dashboard" className="cursor-pointer flex items-center gap-1 px-4">
                    <Image 
                        src="/lion.svg"
                        width = {34}
                        height = {34}
                        alt ="Dhan Icon"
                    />

                    <h1 className="text-[26px] font-ibm-plex-serif font-bold text-black">
                        Dhan
                    </h1>
                </Link>

                <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
                    <SheetClose asChild>
                        <nav className="flex h-full flex-col gap-6 pt-16t text-white">
                            {sidebarLinks.map((item) => {
                                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                                return ( 
                                    <SheetClose asChild key={item.route}>
                                        <Link 
                                            href={item.route} 
                                            key={item.label} 
                                            className=
                                                {cn('flex gap-3 items-center p-4 rounded-lg w-full max-w-60',
                                                {'bg-teal-600':isActive})}>
                                            <Image 
                                                src={item.imgURL}
                                                alt={item.label}
                                                width={20}
                                                height={20}
                                                className={cn({'brightness-[3] invert-0': isActive})}
                                            />
                                            <p className=
                                                {cn('text-16 font-semibold text-black', {'text-white': isActive})}>
                                                {item.label}
                                            </p>

                                        </Link>
                                    </SheetClose>
                                )
                            })}
                            USER
                        </nav>
                    </SheetClose>
                    
                    <Footer user = {user} type="mobile" />
                </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNav