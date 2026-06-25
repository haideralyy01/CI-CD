import { prismaClient } from "@repo/db"


export default async function Home() {
  const user = await prismaClient.user.findFirst();
  return (
    <div>
      {user?.email}
      {user?.password}
    </div>
  );
}
