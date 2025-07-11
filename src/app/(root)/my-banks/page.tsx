import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const MyBanks = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) return <div> Please log in</div>;

  const accounts = await getAccounts({
    userId: loggedIn.$id
  });

  if (!accounts || accounts.data) return <div>No accounts found</div>;

  return (
    <section className="flex">
      <div className="flex h-screen max-h-screen w-full flex-col gap-8 bg-gray-100 p-8 xl:py-12">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities"
        />

        <div className="space-y-4">
          <h2 className="text-[18px] font-semibold text-gray-900">
            Your Cards
          </h2>
          <div className="flex flex-wrap gap-6">
            {accounts && accounts.data.map((a: Account)=> (
              <BankCard
                key={a.id}
                account={a}
                userName={loggedIn?.firstName}
              />
            ))}
          </div>
        </div>
      </div>

    </section>

  )
}

export default MyBanks