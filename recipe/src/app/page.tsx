import Header from "@/components/Home/Header";
import Menu from "../components/Home/Menu";
import styles from "./styles/home.module.css";
import SubHeading from "@/components/Home/SubHeading";
import { prisma } from "@/lib/prisma";
export default async function Home() {
  const user = await prisma.user.findFirst({
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
    </main>
  );
  console.log("user", user);
}
