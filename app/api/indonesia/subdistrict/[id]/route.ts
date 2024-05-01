import axios from "axios";

interface Slug {
 id: string;
}

export async function GET(
 request: Request,
 { params }: { params: { id: Slug } }
) {
 try {
  const response = await axios.get(
   `https://emsifa.github.io/api-wilayah-indonesia/api/districts/${params?.id}.json`
  );

  const responseData = response.data;

  const responseBody = JSON.stringify(responseData);
  const headers = {
   "Access-Control-Allow-Origin": "*",
   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
   "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };

  return new Response(responseBody, {
   status: 200,
   headers,
  });
 } catch (error) {
  console.error("Error fetching data:", error);
  return new Response("Error fetching data", {
   status: 500,
   headers: {
    "Content-Type": "text/plain",
   },
  });
 }
}
