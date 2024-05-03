import { CategorySection } from "@/components/CategorySection/CategorySection";
import { Hero } from "@/components/Hero/Hero";
import { InfoSection } from "@/components/InfoSection/infoSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="pt-4 px-4 pb-8 bg-amber-600">
        <InfoSection />
      </section>

      <section className="p-4 bg-neutral-100 text-black">
        <CategorySection />
      </section>
    </main>
  );
}
