"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-2 py-1 transition-colors duration-300 ${
        isActive ? "text-primary" : "text-gray-700 hover:text-orange-500"
      }`}
    >
      {children}
      {/* underline */}
      <span
        className={`absolute left-0 -bottom-0.5 w-full h-0.5 bg-primary rounded-full transition-all duration-300
          ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
      ></span>
    </Link>
  );
}

