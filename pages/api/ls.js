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

  const db = fs.readFileSync("db");

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
