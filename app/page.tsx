import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/getProducts";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <ProductGrid products={products} />
    </main>
  );
}