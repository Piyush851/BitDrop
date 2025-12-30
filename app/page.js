import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col items-center justify-center text-center gap-4 max-w-2xl mx-auto">

          <p className="text-3xl font-bold text-slate-900">
            Shorten links without the clutter
          </p>

          <p className="text-slate-600 text-lg">
            Fast, simple, and built for everyday use.
          </p>

          <p className="text-slate-700 leading-relaxed">
            BitDrop helps you turn long, messy URLs into short, reliable links in seconds.
            No unnecessary features, no distractions — just dependable link shortening
            that works whether you’re sharing once or at scale.
          </p>

            <Link href="/shorten" className="bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors duration-200r">
              Try Now
            </Link>

        </div>

        <div className="flex justify-start relative">
          <Image
            src={"/vector.png"}
            fill
            alt="vector"
          />
        </div>
      </section>
    </div>
  );
}
