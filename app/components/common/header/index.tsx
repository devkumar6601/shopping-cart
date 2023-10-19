import Link from "next/link";
import { useState } from "react";

const navigation = [
  { title: "T1", href: "/t1" },
  { title: "T2", href: "/t2" },
];

export const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  return (
    <nav className="bg-slate-100 border-b-2 shadow-lg shadow-slate-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0  bg-slate-300 p-2 pl-4 pr-4">
              <Link href="/">Logo</Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                {navigation.map(({ href, title }) => (
                  <a
                    href={href}
                    className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                    key={title}
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {openMobileMenu && (
        <div className="md:hidden lg:hidden sm:block">
          <div className="px-2 pt-2 pb-3">
            {navigation.map(({ href, title }) => (
              <a
                href={href}
                className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                key={title}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
