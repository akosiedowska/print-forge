import { getModelById } from "@/app/lib/models"
import type { ModelDetailPageProps } from "@/app/types"
import Image from "next/image"
import imgPlaceholder from "@/public/placeholder.png"
import { FaRegHeart } from "react-icons/fa6"
import Pill from "@/app/components/Pill"

export default async function ModelDetailPage({
  params,
}: ModelDetailPageProps) {
  const { id } = await params
  const model = await getModelById(id)
  const formattedDate = new Date(model.dateAdded).toLocaleDateString("en-US")

  return (
    <div className="flex flex-col md:flex-row p-5 max-w-6xl">
      <Image
        src={imgPlaceholder}
        alt="placeholder"
        className="px-5 w-full max-w-[500px] mx-auto md:mx-2"
      />
      <div className="flex flex-col gap-4.25 p-5">
        <div className="flex flex-col gap-1.25">
          <div
            className="flex items-center mt-2 text-gray-600"
            aria-label={`${model.likes} likes`}
          >
            <FaRegHeart
              className="w-5 h-5 mr-1 text-gray-400"
              aria-hidden="true"
            />
            <span>{model.likes}</span>
          </div>
          <h1 className="text-[32px] font-bold">{model.name}</h1>
        </div>
        <div className="flex gap-1.5">
          <Pill aria-label="Category">{model.category}</Pill>
        </div>
        <p className="text-2xl">{model.description}</p>
        <p className="mt-[40px]">Added on {formattedDate}</p>
      </div>
    </div>
  )
}
