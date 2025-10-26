'use client';

import { CopilotChat } from "@copilotkit/react-ui";
import { useRouter } from "next/navigation";
import { LogOut, CheckCircle2 } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Page = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;

  async function signOutAction() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/sign-in");
        },
      },
    });
  }

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-gray-950 text-black dark:text-white">
      
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800 shrink-0">
        <div className="flex items-center gap-3">
          {/* Maven Logo Placeholder */}
          <div className="w-7 h-7 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold text-lg rounded-md p-1">
            M
          </div>
          <h1 className="text-lg font-semibold">
            Drive Copilot
          </h1>
        </div>
        
        {/* User Status & Sign Out */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Connected: {user?.email || "User"}</span>
          </div>
          
          {/* Sign Out Form */}
          <form action={signOutAction}>
            <button 
              type="submit" 
              className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </form>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-hidden">
        <CopilotChat className="h-full" />
      </main>
    </div>
  );
}

export default Page;