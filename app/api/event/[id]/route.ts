export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/api/events/${id}?populate=*`,
      {
        next: {
          revalidate: 10,
        },
      }
    );
    const data = await res.json();

    if (!res.ok) {
      return Response.json({
        error: "An error occurred while fetching events. Please try again.",
      });
    }

    return Response.json({ data: data.data });
  } catch (error) {
    return Response.json({
      error: "An error occurred while fetching events. Please try again.",
    });
  }
}
