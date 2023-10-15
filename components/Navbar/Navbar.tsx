import Link from 'next/link';
import ThemeButton from '@/components/shared/ThemeButton';
import Drawer from './Drawer';
import DrawerButton from './DrawerButton';

export default function Navbar() {

  return (
    <>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="lg:hidden">
              <DrawerButton />
            </div>
            <Link href="/" className="normal-case text-xl">
              <span className='primary-background bg-clip-text text-transparent'>
                Locales Updates
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <details>
                  <summary>News</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/about">News1</Link>
                    </li>
                    <li>
                      <Link href="/about">News2</Link>
                    </li>
                    <li>
                      <Link href="/about">News3</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/about">Ads</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end mr-5 flex">
            <div>
              <a className="btn mr-2">Sign Up</a>
            </div>
            <div>
              <a className="btn mr-2">Login</a>
            </div>
            <ThemeButton />
          </div>
        </div>
        <div className="h-3 primary-background"></div>
      </nav>

      <Drawer />
    </>
  )
}