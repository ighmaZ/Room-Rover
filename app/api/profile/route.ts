// app/api/profile/route.ts
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const token = request.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const response = await axios.get("http://localhost:3001/api/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return new NextResponse(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
}
