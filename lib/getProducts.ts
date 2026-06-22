import Papa from "papaparse";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

  if (!url) {
    throw new Error("NEXT_PUBLIC_GOOGLE_SHEET_URL be diisilum.");
  }

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Fetch gagal: ${response.status}`);
  }

  const csvText = await response.text();

  console.log(csvText);

  const parsed = Papa.parse<Product>(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  console.log(parsed.data);

  return parsed.data;
}