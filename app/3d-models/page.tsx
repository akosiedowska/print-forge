import ModelCard from "../components/ModelCard"
import ModelsGrid from "../components/ModelsGrid"
import { getModels } from "../lib/models"
import { Model, ModelsPageProps } from "../types"
import Form from "next/form"

const Models = async ({ searchParams }: ModelsPageProps) => {
  // const models = await getAllModels()
  // return (
  //   <div className="container px-4 py-8 mx-auto">
  //     <h1 className="mb-8 text-3xl font-bold">All Models</h1>
  //     <div
  //       className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  //       role="region"
  //       aria-label="3D Models Gallery"
  //     >
  //       {models.map((model: Model) => (
  //         <ModelCard key={model.id} model={model} />
  //       ))}
  //     </div>
  //   </div>
  // )
  const { query } = await searchParams
  const models = await getModels()
  const filteredModels = query
    ? models.filter(
        (model) =>
          model.name.toLowerCase().includes(query.toLowerCase()) ||
          model.description.toLowerCase().includes(query.toLowerCase())
      )
    : models
  return (
    <>
      <Form action="/3d-models">
        <label htmlFor="models-query" className="sr-only">
          Search models
        </label>
        <input
          type="search"
          name="query"
          id="models-query"
          placeholder="Search for a model"
          className="py-1.5 px-3 border border-[#606060] rounded-[20px] w-full md:w-auto text-sm  placeholder-gray-500 focus:border-[#606060] focus:outline-none focus:ring-0 md:text-base"
          autoComplete="off"
          defaultValue={query}
        />
      </Form>
      <ModelsGrid title="3D Models" models={filteredModels} />
    </>
  )
}

export default Models
