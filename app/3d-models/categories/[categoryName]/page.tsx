import ModelsGrid from "@/app/components/ModelsGrid"
import { getCategoryBySlug } from "@/app/lib/categories"
import { getModels } from "@/app/lib/models"
import { CategoryPageProps } from "@/app/types"

const Category = async ({ params }: CategoryPageProps) => {
  const { categoryName } = await params
  // const category = getCategoryBySlug(categoryName)
  const models = await getModels({ category: categoryName })
  return (
    <div>
      <ModelsGrid title="3D Models" models={models} />
      {/* <div>category page: {categoryName}</div>
      <div>category name: {category.displayName}</div> */}
    </div>
  )
}

export default Category
