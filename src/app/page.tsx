import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Locations from "@/components/home/Locations";
import { getPrisma } from "@/lib/prisma";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export default async function Home() {
  // Get D1 binding on Cloudflare, undefined locally
  let env;
  try {
    env = getRequestContext().env;
  } catch {
    env = undefined;
  }

  const prisma = getPrisma(env);

  // Fetch active announcements (exclude info type - those go in footer)
  // Also exclude expired announcements
  const now = new Date();
  const announcements = await prisma.announcement.findMany({
    where: {
      isActive: true,
      type: {
        not: "info",
      },
      OR: [
        { expiresAt: null }, // Never expires
        { expiresAt: { gt: now } }, // Not yet expired
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <>
      <Hero announcements={announcements} />
      <Story />
      <Locations />
    </>
  );
}
