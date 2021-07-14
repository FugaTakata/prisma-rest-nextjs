const path = require("path");
import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const posts = process.env.NEXT_PUBLIC_DATABASE_URL;
  console.log(posts);
  const resultPosts = path.resolve("../../prisma/dev.db");
  console.log(resultPosts);
  console.log(__dirname);
  res.json({ posts, resultPosts, dir: __dirname });
}
