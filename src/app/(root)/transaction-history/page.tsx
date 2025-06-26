import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionsTable from '@/components/TransactionsTable';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = async ({ searchParams: {id, page}}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
    const loggedIn = await getLoggedInUser();
    const accounts = await getAccounts({
      userId: loggedIn.$id
    });
  
    const appwriteItemId = (id as string ) || accounts?.data[0]?.appwriteItemId;
  
    const account = await getAccount({
      appwriteItemId
    });
  
    if (!accounts) return;
  
    const accountsData = accounts?.data;

    const rowsPerPage = 10;
    const totalPages = Math.ceil(account?.transactions.length / rowsPerPage);

    const indexOfLastTransaction = rowsPerPage * currentPage;
    const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

    const currentTransactions = account?.transactions.slice(
        indexOfFirstTransaction, indexOfLastTransaction
    );

  return (
    <section className="flex max-h-screen w-full flex-col gap-8 bg-gray-25 p-8xl:py-12">
      <div className="flex w-full flex-col items-start justify between gap-8 md:flex-row">
        <HeaderBox
          title="Transaction History"
          subtext="See your bank details and transactions." 
        />
      </div>

      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 rounded-lg border-y bg-teal-600 px-4 py-5 md:flex-row">
          <div className="flex flex-col gap-2">
            <h2 className="text-[18px] font-bold text-white">
              {account?.data.name}
            </h2>
            <p className="text-[14px] text-white">
              {account?.data.officialName}
            </p>
            <p className="text-[14px] font-semibold tracking-widest text-white">
                        ●●●● ●●●● ●●●● {account?.data.mask}
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-2 rounded-md bg-blue-25/20 px-4 py-2 text-white">
            <p className="text-[14px]">
              Current Balance
            </p>
            <p className='text-[24px] text-center font-bold'>
              {formatAmount(account?.data.currentBalance)}
            </p>
          </div>
        </div>
        <section className="flex w-full flex-col gap-6">
          <TransactionsTable
            transactions={currentTransactions}
          />
          {totalPages > 1 && (
              <div className="my-4 w-full">
                  <Pagination 
                      totalPages={totalPages}
                      page={currentPage}
                  />
              </div>
          )}

        </section>
      </div>
    </section>
  )
}

export default TransactionHistory