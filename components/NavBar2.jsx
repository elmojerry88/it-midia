// components/Navbar.js
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Links do menu
  const links = [
    { href: '/', label: 'PÁGINA INICIAL' },
    { href: '/servicos', label: 'SERVIÇOS' },
    { href: '/produtos', label: 'PRODUTOS' },
    { href: '/sobre-nos', label: 'SOBRE NÓS' },
  ];

  return (
    <nav className=" w-auto py-4">
      <div className="container mx-auto flex items-center justify-center ">
        <div className=" p-2 w-full sm:w-auto border-none md:border-2 lg:border-2 border-cream rounded-3xl">
          {/* Botão de Menu Hamburguer */}
          <div className="sm:hidden flex justify-end pr-4 ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="#470F4B"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Links do menu */}
          <ul
            className={clsx(
              " text-white text-center text-xs font-[family-name:var(--font-lexend-deca-regular)]",
              "sm:flex sm:space-x-8 items-center justify-center",
              { block: isOpen, hidden: !isOpen, "sm:block": true }
            )}
          >
            {links.map((link) => (
              <li key={link.href} className="sm:inline-block">
                <Link href={link.href}>
                  <span
                    className={clsx(
                      "nav-links block py-2 px-2 cursor-pointer",
                      { "bg-purple-800 bg-opacity-50 rounded-3xl": pathname === link.href }
                    )}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
