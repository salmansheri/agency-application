import { NextResponse } from "next/server";
import prisma from "@/libs/prismaDB";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return new NextResponse("Unauthenticated", {
        status: 404,
      });
    }

    const body = await request.json();

    const { title, content, image, description } = body;

    const post = await prisma.post.create({
      data: {
        title,
        userId: currentUser.id,
        image,
        content,
        description,
      },
    });

    return NextResponse.json(post, {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse("Database Error", {
      status: 500,
    });
  }
}
