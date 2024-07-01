export async function POST() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/api/events`);
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
