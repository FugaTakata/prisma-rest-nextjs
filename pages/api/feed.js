import prisma from "../../lib/prisma";
const db = require("../../prisma/dev.db");

export default async function handle(req, res) {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  });
  res.json(posts);
}
