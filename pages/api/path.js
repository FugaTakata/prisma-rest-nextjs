import fs from "fs";
import path from "path";
import getConfig from "next/config";
const exec = require("child_process").execSync;
const { serverRuntimeConfig } = getConfig();

export default async function handle(req, res) {
  const basePath = process.cwd();
  const basePathJoined = path.join(process.cwd(), ".next/server/chunks");
  const filePath = path.join(basePath, "dev.db");
  const filePathJoined = path.join(basePathJoined, "dev.db");

  const a = {
    basePath,
    basePathJoined,
    filePath,
    filePathJoined,
  };

  res.json(a);
}
