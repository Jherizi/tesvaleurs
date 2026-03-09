import { NextResponse } from "next/server";
import { MOCK_ANALYSE_GRATUITE } from "@/lib/mock-data";

export async function POST() {
  // TODO: Replace with real Anthropic API call
  // For now, return mock data with a small delay to simulate API processing
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json(MOCK_ANALYSE_GRATUITE);
}
