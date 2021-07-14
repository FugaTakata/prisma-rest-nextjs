import prisma from "../../lib/prisma";
const path = require("path");

// GET /api/filterPosts?searchString=:searchString
export default async function handle(req, res) {
  const { searchString } = req.query;
  const resultPosts = path.resolve("../../prisma/dev.db");
  console.log(resultPosts);
  console.log(__dirname);
  res.json(resultPosts);
}
