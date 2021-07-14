import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  console.log("__dirname", __dirname, "process.cwd()", process.cwd());
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  });
  res.json(posts);
}
