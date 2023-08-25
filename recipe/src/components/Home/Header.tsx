"use client";
import { useState } from "react";
import styles from "@/app/styles/header.module.css";

const Header = () => {
  const user: string = "Troy";
  const welcomeString = `Welcome \n to ${user}'s Kitchen \n Lets cook`;
  const [auth, changeAuth] = useState(true);
  const headerContent = (user: string | undefined) => {
    if (user) {
      return <h1 className={styles.header}>{welcomeString}</h1>;
    }
    return <h1> This is Recipe book</h1>;
  };

  return <>{headerContent("Troy")}</>;
};

export default Header;
