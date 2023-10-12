import Link from 'next/link';
import ThemeButton from './shared/ThemeButton';

export default function Navbar() {
  return (
    <nav>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">Locales Updates</Link>
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
      <div className="bg-purple-700 h-3"></div>
    </nav>
  )
}