"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const [jumpPage, setJumpPage] = useState("");

  // hanya sembunyikan kalau benar-benar tidak ada data
  if (totalPages === 0) return null;

  const getPages = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, 5, "...", totalPages);
      return pages;
    }

    if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );

      return pages;
    }

    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages
    );

    return pages;
  };

  const handleJump = () => {
    const page = Number(jumpPage);

    if (
      !Number.isNaN(page) &&
      page >= 1 &&
      page <= totalPages
    ) {
      onPageChange(page);
      setJumpPage("");
    }
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      {/* Pagination */}
      <div className="flex items-center gap-1 flex-wrap justify-center">
        <button
          onClick={() =>
            onPageChange(Math.max(currentPage - 1, 1))
          }
          disabled={currentPage === 1}
          className="h-10 w-10 rounded-xl border bg-white hover:bg-neutral-100 disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4 mx-auto" />
        </button>

        {getPages().map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="px-2 text-neutral-400"
            >
              ...
            </span>
          ) : (
            <button
              key={`${page}-${index}`}
              onClick={() =>
                onPageChange(page as number)
              }
              className={`h-10 w-10 rounded-xl text-sm font-medium transition ${
                currentPage === page
                  ? "bg-rose-600 text-white"
                  : "bg-white border hover:bg-neutral-100"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() =>
            onPageChange(
              Math.min(currentPage + 1, totalPages)
            )
          }
          disabled={currentPage === totalPages}
          className="h-10 w-10 rounded-xl border bg-white hover:bg-neutral-100 disabled:opacity-40"
        >
          <ChevronRight className="w-4 h-4 mx-auto" />
        </button>
      </div>

      {/* Page Info */}
      <p className="text-sm text-neutral-500">
        Halaman {currentPage} dari {totalPages}
      </p>

      {/* Jump To Page */}
      {totalPages > 1 && (
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={totalPages}
            value={jumpPage}
            onChange={(e) =>
              setJumpPage(e.target.value)
            }
            placeholder="Page"
            className="w-20 h-10 rounded-xl border px-3 text-center text-sm"
          />

          <button
            onClick={handleJump}
            className="h-10 px-4 rounded-xl bg-neutral-900 text-white hover:bg-neutral-700"
          >
            Go
          </button>
        </div>
      )}
    </div>
  );
}