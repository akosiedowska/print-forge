import { getAllCategories } from "@/app/lib/categories"
import { LayoutProps } from "@/app/types"
import Link from "next/link"
import NavLink from "../components/NavLink"
import CategoriesNav from "../components/CategoriesNav"

export default function CategoriesLayout({ children }: LayoutProps) {
  const categories = getAllCategories()

  return (
    <div className="flex flex-col md:gap-20 p-10 grow md:flex-row relative">
      <CategoriesNav />
      <main className="flex-1 p-4 md:ml-64">{children}</main>
    </div>
  )
}
