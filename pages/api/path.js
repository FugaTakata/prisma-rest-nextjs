import fs from "fs";
import path from "path";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

export default async function handle(req, res) {
  const dbPath = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    "./path/to/file.json"
  );

  res.json({
    dbPath,
  });
}
