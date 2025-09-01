import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="flex flex-col items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row max-w-7xl">
        <div className="py-5 px-2.5 flex flex-col gap-5">
          <h1 className={`text-[40px] font-bold font-mont`}>
            Discover what’s possible with 3D printing
          </h1>
          <p className="text-2xl">
            Join our community of creators and explore a vast library of
            user-submitted models.
          </p>
          <Link href="/3d-models">
            <button className="self-start uppercase font-semibold py-3 px-6 t-black transition duration-200 bg-white border-2 border-black hover:bg-black hover:text-white cursor-pointer">
              Browse models
            </button>
          </Link>
        </div>
        <Image src="/hero-img.png" alt="hero image" width={500} height={500} />
      </section>
    </main>
  )
}
