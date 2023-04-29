export default function handler(request, response) {
  if (request.method === "GET") {
    return response.status(200).json({ time: Date.now() });
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
