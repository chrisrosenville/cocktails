import { CategorySection } from "@/components/CategorySection/CategorySection";
import { Hero } from "@/components/Hero/Hero";
import { InfoSection } from "@/components/InfoSection/InfoSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className=" text-white bg-lime-700 ">
        <InfoSection />
      </section>

      <section className="p-4 bg-[#EDEAE0] text-black min-h-[calc(100svh)] md:min-h-0 ">
        <CategorySection />
      </section>
    </main>
  );
}
