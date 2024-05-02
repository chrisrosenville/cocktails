import { CategorySelectAndSearchContainer } from "@/components/CategorySection/CategorySelectAndSearchContainer";
import { Hero } from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="p-4 bg-neutral-100 text-black">
        <h2 className="text-2xl font-Oswald uppercase tracking-wide text-center">
          Discover new cocktails
        </h2>
        <div className="mt-2">
          <CategorySelectAndSearchContainer />
        </div>
      </section>
    </main>
  );
}
