"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          CalQulate
        </Link>
        <ul className="flex space-x-6 text-sm font-medium text-gray-600">
          <li>
            <Link
              href="/upload"
              className={clsx(
                "hover:text-blue-600",
                pathname === "/upload" && "text-blue-700 font-semibold"
              )}
            >
              Upload
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={clsx(
                "hover:text-blue-600",
                pathname === "/about" && "text-blue-700 font-semibold"
              )}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
