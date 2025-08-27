import Image from "next/image"
import { FaRegFlag } from "react-icons/fa6"
import { GoGlobe } from "react-icons/go"
import { ImStack } from "react-icons/im"

const About = () => {
  return (
    <main>
      <section className="container max-w-4xl px-4 py-8 mx-auto">
        <div className="grid items-center gap-8 mb-12 md:grid-cols-2">
          <div className="h-full">
            <Image
              src="/hero-image-square.svg"
              alt="hero image"
              width={350}
              height={350}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-sm uppercase tracking-widest">
              About printforge
            </p>
            <h1 className="text-[40px] font-bold font-mont">
              Empowering makers worldwide
            </h1>
            <p className="text-2xl">
              Founded in 2023, PrintForge has quickly become the go-to platform
              for 3D printing enthusiasts, makers, and professional designers to
              share and discover amazing STL files for 3D printing.
            </p>
            <p className="text-2xl">
              Our mission is to foster a vibrant community where creativity
              meets technology, enabling anyone to bring their ideas to life
              through 3D printing.
            </p>
          </div>
        </div>
      </section>
      <hr className="border-gray-200" aria-hidden="true" />
      <section className="py-12" aria-labelledby="key-features">
        <div className="px-6 mx-auto max-w-7xl">
          <h2 id="key-features" className="sr-only">
            Key Features
          </h2>
          <div className="grid gap-6 md:gap-0 md:grid-cols-3">
            <article className="p-6 bg-white">
              <div className="flex gap-2 items-center mb-3">
                <ImStack className="text-[28px]" />
                <h3 className="text-[28px] font-bold font-mont">
                  100K+ Models
                </h3>
              </div>
              <p className="text-xl">
                Access our vast library of community-created 3D models, from
                practical tools to artistic creations.
              </p>
            </article>
            <article className="p-6 bg-white border-gray-400 md:border-x">
              <div className="flex gap-2 items-center mb-3">
                <GoGlobe className="text-[28px]" />
                <h3 className="text-[28px] font-bold font-mont">
                  Active Community
                </h3>
              </div>
              <p className="text-xl">
                Join thousands of makers who share tips, provide feedback, and
                collaborate on projects.
              </p>
            </article>
            <article className="p-6 bg-white">
              <div className="flex gap-2 items-center mb-3">
                <FaRegFlag className="text-[28px]" />
                <h3 className="text-[28px] font-bold font-mont">Free to Use</h3>
              </div>
              <p className="text-xl">
                Most models are free to download, with optional premium features
                for power users.
              </p>
            </article>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" aria-hidden="true" />

      <section className="container max-w-3xl px-4 py-8 mx-auto">
        <div className="prose max-w-none">
          <h2 className="mb-4 text-[40px] font-bold font-mont">Our Vision</h2>
          <p className="mb-4 text-2xl">
            At PrintForge, we believe that 3D printing is revolutionizing the
            way we create, prototype, and manufacture. Our platform serves as a
            bridge between designers and makers, enabling the sharing of
            knowledge and creativity that pushes the boundaries of what's
            possible with 3D printing.
          </p>
          <p className="text-2xl">
            Whether you're a hobbyist looking for your next weekend project, an
            educator seeking teaching materials, or a professional designer
            wanting to share your creations, PrintForge provides the tools and
            community to support your journey in 3D printing.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About
