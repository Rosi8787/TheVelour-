import Papa from "papaparse";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const url =
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL!;

  const response = await fetch(url, {
    next: {
      revalidate: 0,
    },
  });

  const csvText = await response.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data as Product[];
}