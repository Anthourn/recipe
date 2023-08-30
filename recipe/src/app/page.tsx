import Header from "@/components/Home/Header";
import Menu from "../components/Home/Menu";
import styles from "./styles/home.module.css";
import SubHeading from "@/components/Home/SubHeading";
import { prisma } from "@/lib/prisma";
import type { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user: User = await prisma.user.findFirst({
    where: {
      email: "demo@demo.com",
    },
  });
  console.log("main", user);
  return (
    <main className={styles.container}>
      <div className={styles.topHeading}>
        <Menu></Menu>
        <Header user={user}></Header>
      </div>
      <SubHeading></SubHeading>
      <pre>{JSON.stringify(session)}</pre>
    </main>
  );
  console.log("user", user);
}
