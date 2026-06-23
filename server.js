import { pathToFileURL } from "node:url";

export default {
  async fetch(...args) {
    const server = await import("./src/server.ts");
    return server.default.fetch(...args);
  },
};

const isDirectRun =
  process.env.ACS_HOSTINGER_WRAPPER !== "1" &&
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href &&
  process.argv[1].replace(/\\/g, "/").endsWith("/server.js");

if (isDirectRun) {
  const { startHostingerServer } = await import("./server/hostingerServer.js");
  startHostingerServer();
}
