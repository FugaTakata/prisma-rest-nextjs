const exec = require("child_process").execSync;

export default async function handle(req, res) {
  const here = exec("ls ./").toString();
  const parent = exec("ls ../").toString();
  const grandParent = exec("ls ../../").toString();

  res.json({ here, parent, grandParent });
}
