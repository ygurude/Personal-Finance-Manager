import HeaderBox from '@/components/HeaderBox'
import PaymentTransferForm from '@/components/PaymentTransferForm'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Transfer = async () => {
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) return;
  
  const accounts = await getAccounts({
    userId: loggedIn.$id
  });

  if (!accounts) return;
  const accountsData = accounts?.data;
  if (!accountsData) return;

  return (
    <section className="no-scrollbar flex flex-col overflow-y-scroll bg-gray-25 p-8 md:max-h-screen xl:py-12">
      <HeaderBox 
        title="Payment Transfer"
        subtext = "Please provide any specific details or notes related to payment transfer"
      />
      <section className="size-full pt-5">
        <PaymentTransferForm 
          accounts={accountsData}
        />
      </section>
    </section>
  )
}

export default Transfer