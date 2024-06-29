export default {
  fetch(request: Request) {
    console.log({
      url: request.url,
      method: request.method,
      headers: Object.fromEntries(request.headers.entries()),
    });
    return new Response(request.headers.get("x-real-ip") + "\n");
  },
};
