import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  product_no: string;
  name: string;
  price: string;
  image: string;
  cta_link: string;
}

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({
  product,
  priority = false,
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-neutral-100">
        <Image
          src={product.image}
          alt={`${product.name} - Produk Fashion Wanita`}
          fill
          priority={priority}
          sizes="
            (max-width: 640px) 50vw,
            (max-width: 1024px) 33vw,
            25vw
          "
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-2 left-2 rounded-full bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-medium text-neutral-700 shadow-sm">
          #{product.product_no}
        </div>
      </div>

      <div className="flex flex-col justify-between p-3 md:p-4 flex-1">
        <div>
          <h2 className="line-clamp-2 text-sm md:text-base font-semibold text-neutral-900 leading-snug">
            {product.name}
          </h2>
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between border-t pt-3">
            <span className="text-[10px] uppercase tracking-wider text-neutral-400">
              Price
            </span>

            <p className="font-bold text-neutral-900 text-sm md:text-lg">
              Rp {Number(product.price).toLocaleString("id-ID")}
            </p>
          </div>

          <Button
            asChild
            className="mt-3 w-full h-10 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white"
          >
            <a
              href={product.cta_link}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label={`Beli ${product.name}`}
            >
              Beli Sekarang
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}