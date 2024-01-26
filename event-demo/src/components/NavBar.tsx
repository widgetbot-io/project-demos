import Image from 'next/image';
import Link from "next/link";
import { useStoreActions, useStoreState } from '@/store/hooks';

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

function Login() {
  const login = useStoreActions(state => state.auth.login);


  return (
    <button onClick={() => login('mason')}>
      Login
    </button>
  )
}

export default function NavBar() {
  const user = useStoreState(state => state.auth.user);

  return (
    <nav className="p-4 flex justify-between">
      <div className="flex gap-x-4 items-center">
        <Link className="flex gap-x-2 items-center" href="/">
          <Image src="widgetbot.svg" alt="WidgetBot Logo" width={48} height={48} />

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

      {user ? <UserInfo /> : <Login />}
    </nav>
  );
}
