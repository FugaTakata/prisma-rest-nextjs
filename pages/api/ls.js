const exec = require("child_process").execSync;

export default async function handle(req, res) {
  const here = exec("ls ./").toString().split("\n");
  const parent = exec("ls ../").toString().split("\n");
  const grandParent = exec("ls ../../").toString().split("\n");
  const grandGrandParent = exec("ls ../../../").toString().split("\n");
  const parentDb = exec("ls /var/task/.next/server/pages/api")
    .toString()
    .split("\n");

  res.json({
    here: { dir: __dirname, here },
    parent: { dir: __dirname, parent },
    grandParent: { dir: __dirname, grandParent },
    grandGrandParent: { dir: __dirname, grandGrandParent },
    parentDb: { dir: __dirname, parentDb },
  });
}
