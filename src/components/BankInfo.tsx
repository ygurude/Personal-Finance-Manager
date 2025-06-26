"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

import {
  cn,
  formUrlQuery,
  formatAmount,
  getAccountTypeColors,
} from "@/lib/utils";

const BankInfo = ({ account, appwriteItemId, type }: BankInfoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account?.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  const colors = getAccountTypeColors(account?.type as AccountTypes);

  return (
    <div
      onClick={handleBankChange}
      className={cn(`gap-[18px] flex p-4 transition-all rounded-xl border ${colors.bg} ${colors.subText} ${colors.lightBg}`, {
        "shadow-sm border-blue-700": type === "card" && isActive,
        "rounded-xl": type === "card",
        "hover:shadow-sm cursor-pointer": type === "card",
      })}
    >
      <figure
        className={`flex items-center justify-center h-fit rounded-full bg-blue-100 ${colors.lightBg}`}
      >
        <Image
          src="/addCard.svg"
          width={20}
          height={20}
          alt={account.subtype}
          className="m-2 min-w-5"
        />
      </figure>
      <div className="flex w-full flex-1 flex-col justify-center gap-1">
        <div className="flex flex-1 items-center justify-between gap-2 overflow-hidden">
          <h2
            className={`text-16 line-clamp-1 flex-1 font-bold text-blue-900 ${colors.title}`}
          >
            {account.name}
          </h2>
          {type === "full" && (
            <p
              className={`text-12 rounded-full px-3 py-1 font-medium text-blue-700 ${colors.subText} ${colors.bg}`}
            >
              {account.subtype}
            </p>
          )}
        </div>

        <p className={`text-16 font-medium text-blue-700 ${colors.subText}`}>
          {formatAmount(account.currentBalance)}
        </p>
      </div>
    </div>
  );
};

export default BankInfo;