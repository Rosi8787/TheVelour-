"use client";

import Pagination from "@/components/Pagination";
import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function ProductGrid({ products }: Props) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 40;

  const filteredProducts = useMemo(() => {
    const keyword = search.toLowerCase().trim();

    return products.filter((product) => {
      return (
        product.name.toLowerCase().includes(keyword) ||
        product.product_no.toLowerCase().includes(keyword)
      );
    });
  }, [products, search]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE,
    );
  }, [filteredProducts, currentPage]);

  return (
    <>
      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-10 text-center">
        <span className="text-xs font-semibold tracking-widest text-rose-500 uppercase inline-block mb-3">
          Curated Collection
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-neutral-900 via-rose-950 to-neutral-900 bg-clip-text text-transparent">
          The Velourá 
        </h1>

        <p className="text-neutral-500 mt-4 text-base md:text-lg max-w-md mx-auto font-light leading-relaxed">
          Temukan koleksi pakaian wanita, skincare premium, dan aksesoris
          eksklusif pilihan kami.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="sticky top-0 z-40 py-4 mb-8 backdrop-blur-md bg-[#FAFAFA]/70 border-b border-neutral-100/50">
          <SearchBar value={search} onChange={setSearch} />

          <div className="flex justify-between items-center max-w-2xl mx-auto px-2 mt-3">
            <p className="text-neutral-400 text-xs font-medium tracking-wide uppercase">
              {filteredProducts.length} Koleksi Tersedia
            </p>

            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-xs text-rose-600 font-medium hover:underline"
              >
                Hapus Pencarian
              </button>
            )}
          </div>
        </div>

        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {paginatedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={index < 4}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-neutral-100 shadow-sm">
            <p className="text-neutral-400">
              Tidak ada produk yang cocok dengan pencarian Anda.
            </p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}
