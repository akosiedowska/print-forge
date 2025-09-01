"use client"

import NavLink from "../components/NavLink"
import { getAllCategories } from "@/app/lib/categories"
import { usePathname } from "next/navigation"

export default function CategoriesNav() {
  const categories = getAllCategories()
  const pathname = usePathname()
  console.log("pathname", pathname)
  return (
    <aside className="flex flex-col md:pt-16.5 sticky top-0 z-10 md:fixed bg-white md:top-1/2 md:-translate-y-1/2 py-2.5">
      <ul className="list-none flex md:flex-col flex-row gap-2 md:gap-5 max-w-full overflow-x-auto md:overflow-hidden scrollbar-hide">
        <NavLink href="/3d-models">All</NavLink>
        {categories.map((category) => (
          <NavLink
            href={`/3d-models/categories/${category.slug}`}
            key={category.displayName}
            isActive={pathname === `/3d-models/categories/${category.slug}`}
          >
            {category.displayName}
          </NavLink>
        ))}
      </ul>
      {/* Fading edge/gradient for horizontal scroll hint on mobile */}
      <div className="absolute top-0 right-0 w-8 h-full pointer-events-none bg-gradient-to-l from-white to-transparent md:hidden" />
    </aside>
  )
}
