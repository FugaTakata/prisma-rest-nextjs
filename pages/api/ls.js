const exec = require("child_process").execSync;

export default async function handle(req, res) {
  const here = exec("ls ./").toString().split("\n");
  const parent = exec("ls ../").toString().split("\n");
  const grandParent = exec("ls ../../").toString().split("\n");
  const grandGrandParent = exec("ls ../../../").toString().split("\n");
  const parentDb = exec("ls -a /var/task/").toString().split("\n");
  const parentDbS = exec("ls -a /var").toString().split("\n");
  const parentDbSs = exec("ls -a ").toString().split("\n");

  res.json({
    dir: __dirname,
    here,
    parent,
    grandParent,
    grandGrandParent,
    parentDb,
    parentDbS,
    parentDbSs,
  });
}
