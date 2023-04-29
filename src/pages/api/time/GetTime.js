export default function getTime(request, response) {
  if (request.method === "GET") {
    response.status(200).json({ time: Date.now() });
  } else {
    response.status(405).json({ message: "Method not allowed" });
  }
}
