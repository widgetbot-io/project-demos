import Image from 'next/image';
import Link from "next/link";
import { useStoreActions, useStoreState } from '@/store/hooks';
import AuthModal from "@/components/AuthModal";

function UserInfo() {
  const user = useStoreState(state => state.auth.user)!;
  const logout = useStoreActions(state => state.auth.logout);

  return (
    <div className="flex items-center gap-x-2">
      <Image src={user.avatarUrl} alt="Profile Picture" className="rounded-full" width={48} height={48} />

      <h2>{user.name}</h2>

      <button onClick={() => logout()}>
        Logout
      </button>
    </div>
  )
}

export default function NavBar() {
  const user = useStoreState(state => state.auth.user);

  return (
    <nav className="p-4 flex justify-between items-center">
      <div className="flex gap-x-4 items-center">
        <Link className="flex gap-x-2 items-center" href="/">
          <Image src="img/widgetbot.svg" alt="WidgetBot Logo" width={48} height={48} />

          <h2 className="text-xl">WidgetBot</h2>
        </Link>

        <span className="-mx-2">|</span>

        <Link href="/">
          Home
        </Link>

        <Link href="/chat">
          Chat
        </Link>
      </div>

      {user ? <UserInfo /> : <AuthModal />}
    </nav>
  );
}
