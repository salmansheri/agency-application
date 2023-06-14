import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/libs/prismaDB";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, password } = body;

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(user, {
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Internal Server Error", {
      status: 500,
    });
  }
}
