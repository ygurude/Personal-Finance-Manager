import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { get } from "http";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) {
    redirect("/login");
  }

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Sticky left sidebar */}
      <div className="sticky top-0 h-screen z-20">
        <Sidebar user={loggedIn} />
      </div>
      {/* Main content area, scrollable */}
      <div className="flex flex-1 min-w-0 flex-col">
        <div className="flex h-16 items-center justify-between p-5 shadow-lg sm:p-8 md:hidden">
          <Image src="/lion.svg" width={30} height={30} alt="menu icon" />
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
        <div className="flex-1 h-screen overflow-y-auto min-w-0">
          {children}
        </div>
      </div>
    </main>
    // <main className="flex h-screen w-full font-inter">"
    //   <Sidebar user={loggedIn} />

    //   <div className="flex size-full flex-col">
    //     <div className="flex h-16 items-center justify-between p-5 shadow-lg sm:p-8 md:hidden">
    //       <Image src="/lion.svg" width={30} height={30} alt="menu icon" />
    //       <div>
    //         <MobileNav user={loggedIn}/>
    //       </div>
    //     </div>
    //     {children}
    //   </div>
    // </main>
  );
}