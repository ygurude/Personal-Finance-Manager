import AnimatedCounter from "./AnimatedCounter"
import DoughnutChart from "./DoughnutChart"

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className="flex w-full items-center gap-4 rounded-xl border border-gray-200 p-4 shadow-lg sm:gap-6 sm:p-6">
        <div className="flex size-full max-w-[100px] items-center sm:max-w-[120px]">
            <DoughnutChart accounts={accounts}/>

        </div>
        <div className="flex flex-col gap-6">
            <h2 className="text-[18px] font-semibold text-gray-900">
                Bank Accounts: {totalBanks}
            </h2>
            <div className="flex flex-col gap-2">
                <p className="text-[14px] font-medium text-gray-600">
                    Total Current Balance
                </p>
                <div className="text-[24px] lg:text-[30px] flex-1 flex items-center justify-center font-semibold text-gray-900 gap-2">
                    <AnimatedCounter amount=
                    {totalCurrentBalance}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox