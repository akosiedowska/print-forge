import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  //   console.log("isactive", isActive)
  return (
    <li className="text-sm uppercase min-w-fit">
      <Link
        href={href}
        className={`px-4 py-2 ${
          isActive ? "text-orange-accent" : "text-gray-700"
        } text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent`}
      >
        {children}
      </Link>
    </li>
  )
}
