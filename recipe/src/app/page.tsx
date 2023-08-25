import Header from "@/components/Home/Header";
import Menu from "../components/Home/Menu";
import styles from "./styles/home.module.css";
import SubHeading from "@/components/Home/SubHeading";
export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.topHeading}>
        <Menu></Menu>
        <Header></Header>
      </div>
      <SubHeading></SubHeading>
    </main>
  );
}
