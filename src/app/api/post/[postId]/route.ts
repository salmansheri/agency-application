import { NextResponse } from "next/server";
import prisma from "@/libs/prismaDB";
import getCurrentUser from "@/actions/getCurrentUser";

interface IParams {
  postId: string;
}

export async function DELETE(
  Request: Request,
  { params }: { params: IParams }
) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthenticated", {
        status: 404,
      });
    }

    const deletedPost = await prisma.post.delete({
      where: {
        id: params.postId,
      },
    });

    if (!deletedPost) {
      return new NextResponse("Cannot delete post", {
        status: 401,
      });
    }

    return NextResponse.json(deletedPost, {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", {
      status: 500,
    });
  }
}
export async function PATCH(request: Request, { params }: { params: IParams }) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthenticated", {
        status: 404,
      });
    }

    const { title, content, description, image } = await request.json();

    const updatedPost = await prisma.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title,
        content,
        description,
        image,
      },
    });

    if (!updatedPost) {
      return new NextResponse("Cannot Update post", {
        status: 401,
      });
    }

    return NextResponse.json(updatedPost, {
      status: 200,
    });
  } catch (error) {
    return new NextResponse("Database Error", {
      status: 500,
    });
  }
}
