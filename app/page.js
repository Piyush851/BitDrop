import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="grid grid-cols-2 h-[60vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full px-4 sm:px-6 lg:px-12">

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
            Shorten links without the clutter
          </h1>

          <p className="text-slate-600 text-base sm:text-lg">
            Fast, simple, and built for everyday use.
          </p>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            BitDrop helps you turn long, messy URLs into short, reliable links in seconds.
            No unnecessary features, no distractions — just dependable link shortening
            that works whether you’re sharing once or at scale.
          </p>

          <div className="mt-2">
            <Link href="/shorten" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200r">
              Try Now
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <Image
            src={"/vector.png"}
            fill
            className="object-contain"
            alt="vector"
          />
        </div>
      </section>
    </div>
  );
}
