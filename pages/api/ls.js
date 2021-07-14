const exec = require("child_process").execSync;

export default async function handle(req, res) {
  const here = exec("ls ./").toString().split("\n");
  const parent = exec("ls ../").toString().split("\n");
  const grandParent = exec("ls ../../").toString().split("\n");
  const grandGrandParent = exec("ls ../../../").toString().split("\n");

  res.json({ here, parent, grandParent, grandGrandParent });
}
