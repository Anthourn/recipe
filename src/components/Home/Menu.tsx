"use client";
import { Link } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";
import styles from "../../app/styles/menu.module.css";
import Button from "@mui/material";
import { signOut } from "next-auth/react";
const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        <li className={styles.menuitem}>
          <div className={styles.menuLink}>
            <div className={styles.menuItemFlex}>
              <p>Collections</p>
              <Link href="/collections" className={styles.menuLink}>
                <ArrowOutward
                  color="primary"
                  className={styles.menuIcon}
                ></ArrowOutward>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.menuitem}>
          <div className={styles.menuLink}>
            <div className={styles.menuItemFlex}>
              <p>Pantry</p>
              <Link href="/pantry" className={styles.menuLink}>
                <ArrowOutward
                  color="primary"
                  className={styles.menuIcon}
                ></ArrowOutward>
              </Link>
            </div>
          </div>
        </li>

        <li className={styles.menuitem}>
          <div className={styles.menuLink}>
            <div className={styles.menuItemFlex}>
              <p>New</p>
              <Link href="/new" className={styles.menuLink}>
                <ArrowOutward
                  color="primary"
                  className={styles.menuIcon}
                ></ArrowOutward>
              </Link>
            </div>
          </div>
        </li>
        <li className={styles.menuitem}>
          <div className={styles.menuLink}>
            <div className={styles.menuItemFlex}>
              <p>Sign Out</p>
              <button onClick={() => signOut()} className={styles.menuLink}>
                <ArrowOutward
                  color="primary"
                  className={styles.menuIcon}
                ></ArrowOutward>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
