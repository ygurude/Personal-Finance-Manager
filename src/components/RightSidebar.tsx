import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BankCard from './BankCard'
import { countTransactionCategories } from '@/lib/utils'
// import Category from './Category'

const RightSidebar = ({user, transactions, banks}: RightSidebarProps) => {
  
  const categories: CategoryCount[] = countTransactionCategories(transactions);
  return (
    <aside className="no-scrollbar h-screen max-h-screen flex-col border-gray-200 xl:flex w-[330px] xl:overflow-y-scroll bg-white shadow-md">
      <section className="flex flex-col pb-8">
        <div className="h-[140px] w-full bg-gradient-to-tr from-teal-400 via-orange-200 to-yellow-200 bg-cover bg-no-repeat rounded-b-2xl relative flex flex-col items-center justify-end">
          {/* Avatar: perfectly centered and overlapping the gradient */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[90px] flex flex-col items-center z-10">
            <div className="flex items-center justify-center w-32 h-32 rounded-full bg-white border-4 border-white shadow-md">
              <span className="text-5xl font-bold text-blue-500">
                {user.firstName[0]}
              </span>
            </div>
          </div>
          {/* Name and email: below the avatar, centered */}
        </div>
        <div className="flex flex-col items-center w-full mt-20">
          <h1 className="text-2xl font-semibold text-gray-900 mt-2">
            {user.firstName} {user.lastName}
          </h1>
          <p className="text-base font-normal text-gray-600">
            {user?.email}
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-8 px-6 py-8">
        <div className='flex w-full justify-between items-center'>
          <h2 className='text-lg font-semibold text-gray-900'>My Banks</h2>
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <span className="text-sm font-semibold text-gray-600">
              Add Bank
            </span>
          </Link>
        </div>
          {banks?.length> 0 && (
            <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
              <div className="relative z-10">
                <BankCard 
                  key={banks[0].$id}
                  account={banks[0]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
              {banks[1] && (
                <div className="absolute right-0 top-8 z-0 w-[90%]">
                  <BankCard 
                    key={banks[1].$id}
                    account={banks[1]}
                    userName={`${user.firstName} ${user.lastName}`}
                    showBalance={false}
                  />
                </div>
              )}
            </div>
          )}
          {/* <div className="mt-10 flex flex-1 flex-col gap-6">
            <h2 className="text-[18px] font-semibold text-gray-900">
              Top Categories
            </h2>
            <div className="space-y-5">
              {categories.map((category, index) => (
                <Category key={category.name} category={category} />

              ))}
            </div>
          </div> */}
      </section>
    </aside>
  )
}

export default RightSidebar