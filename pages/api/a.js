const path = require("path");
const fs = require("fs");
import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const posts = process.env.NEXT_PUBLIC_DATABASE_URL;
  console.log(posts);
  const resultPosts = path.resolve("../../prisma/dev.db");
  console.log(resultPosts);
  console.log(__dirname);

  if (fs.existsSync(resultPosts)) {
    console.log("../../prisma/dev.dbある");
  } else {
    console.log("../../prisma/dev.dbない");
  }
  if (fs.existsSync("/var/task/.next/server/pages/api/dev.db")) {
    console.log("/var/task/.next/server/pages/api/dev.dbある");
  } else {
    console.log("/var/task/.next/server/pages/api/dev.dbない");
  }

  res.json({ posts, resultPosts, dir: __dirname });
}
