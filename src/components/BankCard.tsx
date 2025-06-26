import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatAmount } from '@/lib/utils'
import Copy from './Copy'


const BankCard = ({ account , userName, showBalance = true}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
        <Link href={`/transaction-history/?id=${account.appwriteItemId}`} className="relative flex h-[190px] w-full max-w-[420px] justify-between rounded-[20px] border border-white bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-200 shadow-sm backdrop-blur-[6px]"> 
            <div className="relative z-10 flex size-full max-w-[270px] flex-col justify-between rounded-l-[20px] bg-gray-700 bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-200 px-5 pb-4 pt-5">
                <div>
                    <h1 className="text-[16px] font-semibold text-white">
                        {account.name}
                    </h1>

                    <p className="font-ibm-plex-serif font-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>
                <article className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1 className="text-[12px] font-semibold text-white">
                            {userName}
                        </h1>
                        <h2 className="text-[12px] font-semibold text-white">
                            ●● / ●●
                        </h2>
                    </div>
                    <p className="text-[13px] font-semibold tracking-widest text-white">
                        ●●●● ●●●● ●●●● <span className="text[16px]">{account.mask}</span>
                    </p>
                </article>
            </div>
            <div className="flex size-full flex-1 flex-col items-end justify-between rounded-r-[20px] bg-gradient-to-tr from-blue-600 via-blue-400 to-blue-200 bg-cover bg-center bg-no-repeat py-5 pr-5">
                <Image
                    src="/tap.svg"
                    width={30}
                    height={30}
                    alt="pay"
                />
                <Image 
                    src="/mastercard.svg"
                    width={33}
                    height={22}
                    alt="mastercard"
                    className="ml-5"
                />
            </div>

            <Image 
                src="/lines.png"
                width={316}
                height={190}
                alt="lines"
                className="absolute top-0 left-0"
            />
        </Link>
        {showBalance && <Copy title={account?.shareableId}/> }
    </div>
  )
}

export default BankCard