import { clerkClient } from "@clerk/nextjs/server";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const response = await clerkClient.users.getUser(id);
    console.log(response);
    return Response.json({ data: response });
  } catch (error) {
    return Response.json({
      error: "An error occurred while fetching events. Please try again.",
    });
  }
}
