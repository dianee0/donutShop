import Hero from "@/components/home/Hero";
import Story from "@/components/home/Story";
import Locations from "@/components/home/Locations";
import { prisma } from "@/lib/prisma";

export default async function Home() {
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
