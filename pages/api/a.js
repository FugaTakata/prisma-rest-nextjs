import prisma from "../../lib/prisma";

export default async function handle(req, res) {
  const posts = process.env.NEXT_PUBLIC_DATABASE_URL;
  res.json(posts);
}
