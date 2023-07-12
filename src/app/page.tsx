import { animals } from "animals";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center px-5 sm:px-10 mb-10 sm:mb-10">
        <section className="container flex flex-col items-center justify-center gap-2 px-4 py-16 md:pyt-24 lg:py-48 2xl:py-64 flex-grow">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-white">
            showcase
          </h1>
          <p className="uppercase opacity-70 text-center text-xs sm:text-sm md:text-base">
            Incredible wildlife  from around the world.
          </p>
        </section>
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
            {animals.map((animal) => (
              <Link
                key={animal.id}
                href={`/animal/${animal.id}`}
                className="group flex flex-col gap-4"
              >
                <Image
                  width={500}
                  height={400}
                  src={animal.imageSrc}
                  alt={animal.name}
                  className="object-cover object-center h-full transition-all group-hover:opacity-75 group-hover:scale-105"
                />
                <h3 className="text-sm">{animal.name}</h3>
              </Link>
            ))}
          </div>
        </section>
    </main>
  );
}
