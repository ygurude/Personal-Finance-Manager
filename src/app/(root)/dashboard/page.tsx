import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccount, getAccounts } from '@/lib/actions/bank.actions';
import RecentTransactions from '@/components/RecentTransactions';

const Dashboard = async ({ searchParams: { id, page } }: SearchParamProps) => {
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
  

  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <section className="flex w-full h-full">
      {/* Main dashboard content, scrollable if needed */}
      <div className="flex-1 flex flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 overflow-y-auto">
        <header className="flex flex-col justify-between gap-8">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access your personal finance dashboard"
          />
          <TotalBalanceBox 
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>
        <RecentTransactions 
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>
      {/* Sticky right sidebar */}
      <div className="sticky top-0 h-screen hidden xl:block">
        <RightSidebar 
          user={loggedIn}
          transactions={account?.transactions}
          banks={accountsData?.slice(0,2)}
        />
        
      </div>
    </section>
    // <section className="no-scrollbar flex w-full flex-row max-xl:max-h-screen max-xl:overflow-y-scroll">
    //   <div className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-5 sm:px-8 py-7 lg:py-12 xl:max-h-screen cl:overflow-y-scroll">
    //     <header className="flex flex-col justify-between gap-8">
    //       <HeaderBox 
    //         type="greeting"
    //         title="Welcome"
    //         user={loggedIn?.firstName || 'Guest'}
    //         subtext = "Access your personal finance dashboard"
    //       />

    //       <TotalBalanceBox 
    //         accounts={accountsData}
    //         totalBanks={accounts?.totalBanks}
    //         totalCurrentBalance={accounts?.totalCurrentBalance}
    //       />
    //     </header>
    //     <RecentTransactions 
    //       accounts={accountsData}
    //       transactions={account?.transactions}
    //       appwriteItemId={appwriteItemId}
    //       page={currentPage}
    //     />
    //   </div>
    //   <RightSidebar 
    //     user={loggedIn}
    //     transactions={accounts?.transactions}
    //     banks={accountsData?.slice(0,2)}
    //   />
    // </section>
  );
}

export default Dashboard;