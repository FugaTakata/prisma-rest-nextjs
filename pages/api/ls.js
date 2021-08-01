const path = require("path");

const exec = require("child_process").execSync;
const fs = require("fs");

export default async function handle(req, res) {
  res.json({
    pwd: exec("pwd").toString().split("\n"),
    "ls -la ./": exec("ls -al ./").toString().split("\n"),
    "ls -la ../": exec("ls -al ../").toString().split("\n"),
    "ls -la ../../": exec("ls -al ../../").toString().split("\n"),
    "ls -la ../../../": exec("ls -al ../../../").toString().split("\n"),
  });
}
