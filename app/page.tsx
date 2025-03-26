import { CategorySection } from "@/components/CategorySection/CategorySection";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { InfoSection } from "@/components/InfoSection/InfoSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className=" text-white bg-lime-700 ">
        <InfoSection />
      </section>

      <section className="p-4 bg-[#EDEAE0] text-black min-h-svh md:min-h-full">
        <CategorySection />
      </section>
    </main>
  );
}
