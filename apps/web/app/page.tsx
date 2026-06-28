import { prismaClient } from "@repo/db"


export default async function Home() {
  try {
    const user = await prismaClient.user.findFirst();
    return (
      <div>
        Email: {user?.email}
        Password: {user?.password}
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>Could not connect to database</p>
      </div>
    );
  }
}
