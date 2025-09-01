"use client"

import Link from "next/link"
import logoIcon from "@/public/printforge-logo-icon.svg"
import fullLogo from "@/public/printforge-logo.svg"
import Image from "next/image"
import NavLink from "./NavLink"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header>
      <nav className="flex justify-between py-3 px-5">
        <Link href="/">
          <Image
            // src="/printforge-logo-icon.svg"
            src={logoIcon}
            alt="printforge logo"
            // width={40}
            // height={40}
            className="w-[40px] h-auto md:hidden"
          />
          <Image
            // src="/printforge-logo.svg"
            src={fullLogo}
            alt="printforge logo"
            // width={180}
            // height={40}
            className="w-[200px] h-auto hidden md:block"
          />
        </Link>
        <ul className="flex gap-8 py-2">
          <NavLink
            href="/3d-models"
            isActive={pathname.startsWith("/3d-models")}
          >
            3D Models
          </NavLink>

          <NavLink href="/about" isActive={pathname === "/about"}>
            About
          </NavLink>
        </ul>
      </nav>
    </header>
    // <header className="w-full bg-white">
    //   <nav className="flex justify-between px-6 py-4">
    //     <Link href="/">
    //       <div className="relative cursor-pointer">
    //         {/* Desktop Logo */}
    //         <img
    //           src={PFLogo.src}
    //           alt="PrintForge Logo"
    //           className="w-[200px] h-auto hidden md:block"
    //         />
    //         {/* Mobile Logo */}
    //         <img
    //           src={PFLogoIcon.src}
    //           alt="PrintForge Logo"
    //           className="w-[40px] h-auto block md:hidden"
    //         />
    //       </div>
    //     </Link>
    //     <ul className="flex items-center gap-2.5">
    //       <li className="text-sm uppercase cursor-pointer">
    //         <Link href="/3d-models">3D Models</Link>
    //       </li>
    //       <li className="text-sm uppercase cursor-pointer">
    //         <Link href="/about">About</Link>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  )
}
