const exec = require("child_process").execSync;

export default async function handle(req, res) {
  const here = exec("ls ./");
  const parent = exec("ls ../");
  const grandParent = exec("ls ../../");

  res.json({ here, parent, grandParent });
}
