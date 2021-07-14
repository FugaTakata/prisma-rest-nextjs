const path = require("path");

const exec = require("child_process").execSync;
const fs = require("fs");

export default async function handle(req, res) {
  const here = exec("ls ./").toString().split("\n");
  const parent = exec("ls ../").toString().split("\n");
  const grandParent = exec("ls ../../").toString().split("\n");
  const grandGrandParent = exec("ls ../../../").toString().split("\n");
  const parentDb = exec("ls -a /var/task/").toString().split("\n");
  const parentDbS = exec("ls -a /var").toString().split("\n");
  const parentDbSs = exec("ls -a /var/task/.next/server/pages/api")
    .toString()
    .split("\n");
  const parentDbSpages = exec("ls -a /var/task/.next/server/pages")
    .toString()
    .split("\n");
  const DB = "public/db";

  // const dir = path.resolve("./public", DB);

  const fileNames = fs.readFileSync(path.join(__dirname, DB));

  const db = fileNames.map((name) => path.join("/", dir, name));

  res.json({
    dir: __dirname,
    here,
    parent,
    grandParent,
    grandGrandParent,
    parentDb,
    parentDbS,
    parentDbSs,
    parentDbSpages,
    db,
  });
}
