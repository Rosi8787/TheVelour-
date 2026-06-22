"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="w-full max-w-2xl mx-auto px-2">
      <div className="relative group transition-all duration-300">
        
        {/* Apple Style Search Icon */}
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-rose-500 transition-colors duration-300"
        />

        {/* Input Text Box */}
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari gaun, lipbalm, tas, aksesoris cantik..."
          className="w-full h-12 pl-11 pr-10 rounded-2xl bg-white/80 border border-neutral-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)] focus-within:shadow-[0_12px_40px_rgba(225,29,72,0.05)] focus-within:border-rose-200 focus-within:bg-white text-sm transition-all duration-300 placeholder:text-neutral-400 font-light tracking-wide focus-visible:ring-0 focus-visible:ring-offset-0"
        />

        {/* Smooth Reset Button inside search input */}
        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full bg-neutral-100 hover:bg-rose-50 text-neutral-400 hover:text-rose-600 transition-all duration-200 active:scale-90"
            type="button"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
}