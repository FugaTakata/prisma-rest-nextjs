import prisma from "../../lib/prisma";
const c = require("./a.json");

export default async function handle(req, res) {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  });
  res.json(posts);
}
