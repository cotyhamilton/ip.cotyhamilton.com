Deno.serve((request, info) => {
  console.log({
    url: request.url,
    method: request.method,
    headers: Object.fromEntries(request.headers.entries()),
  });
  return new Response(info.remoteAddr.hostname + "\n");
});
