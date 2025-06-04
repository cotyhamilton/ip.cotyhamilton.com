import { trace } from "npm:@opentelemetry/api";

Deno.serve((request, info) => {
  console.log(request.method, new URL(request.url).pathname);
  const span = trace.getActiveSpan();
  if (span) {
    span.setAttribute("client.address", info.remoteAddr.hostname);
    for (const [key, value] of request.headers.entries()) {
      span?.setAttribute(`http.request.header.${key.toLowerCase()}`, value);
    }
  }
  return new Response(info.remoteAddr.hostname + "\n", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
});
