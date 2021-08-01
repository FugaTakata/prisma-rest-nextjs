import fs from "fs";
import path from "path";
import getConfig from "next/config";
const exec = require("child_process").execSync;
const { serverRuntimeConfig } = getConfig();

export default async function handle(req, res) {
  const dbPath = path.join(
    serverRuntimeConfig.PROJECT_ROOT,
    "../../prisma/dev.db"
  );

  const a = {
    "ls -al /": exec(`ls -al /`).toString().split("\n"),
    "ls -al dbPath": exec(`ls -al ${dbPath}`).toString().split("\n"),
    // "ls -al /prisma": exec("ls -al /prisma").toString().split("\n"),
  };

  res.json({
    f: a,
  });
}
