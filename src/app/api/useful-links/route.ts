import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/utils/supabaseClient";

export async function GET(): Promise<Response> {
  const { error, data } = await supabaseAdmin.from("useful-links").select("*").order("name", { ascending: true });

  if (error || !data) {
    return new Response("Error getting links", { status: 500 });
  }

  return NextResponse.json({ usefulLinks: data });
}
