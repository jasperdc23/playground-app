import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  if (!email || !password || !name) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (password.length < 8) {
    return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
  }

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "Email already in use." }, { status: 400 });
  }

  const hashed = await bcrypt.hash(password, 10);

  await db.user.create({
    data: { name, email, password: hashed },
  });

  return NextResponse.json({ success: true });
}
