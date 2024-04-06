import fs from "fs";

export async function POST(request: Request) {
  const body = await request.json();

  fs.writeFileSync(".share.env", body.env);

  return new Response(JSON.stringify({ message: "ok" }), {
    headers: {
      "content-type": "application/json",
    },
  });
}
