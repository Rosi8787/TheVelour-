import Papa from "papaparse";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL!;

  const response = await fetch(url, {
    next: {
      revalidate: 3600,
    },
  });

  const csvText = await response.text();

  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  return Response.json(parsed.data);
}