"use client";
import { useState } from "react";
import styles from "@/app/styles/header.module.css";

const Header = () => {
  const user: string = "Troy";
  const welcomeString = `Welcome \n to ${user}'s Kitchen, \n Lets cook`;
  const [auth, changeAuth] = useState(true);
  const headerContent = (user: string | undefined) => {
    if (user) {
      return <h1 className={styles.header}>{welcomeString}</h1>;
    }
    return <h1> This is Recipe book</h1>;
  };

  return (
    <div className={styles.headerContainer}>
      {headerContent("Troy")}{" "}
      <div className={styles.subSpanText}>
        <p className={styles.subText}>
          This is your home page, Click Collections to see your already built
          recipies, Pantry to visit your inventory and New to add a new Recipe
        </p>
      </div>
    </div>
  );
};

export default Header;
