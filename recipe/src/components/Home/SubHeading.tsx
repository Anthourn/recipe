import Image from "next/image";
import styles from "@/app/styles/subHeading.module.css";
const SubHeading = () => {
  return (
    <>
      <div className={styles.subFlex}>
        <span className={styles.subSpan}>
          <Image
            className={styles.image}
            width="250"
            height="250"
            alt="chef cooking"
            src="/femalechef.jpg"
          ></Image>
          {/* // Image by{" "} */}
          {/* <a href="https://www.freepik.com/free-vector/hand-drawn-iranian-woman-illustration_33579205.htm#query=illustrations%20cooking&position=4&from_view=search&track=ais"> */}
          {/* Freepik */}
          {/* </a> */}
        </span>
        <span className={styles.subSpan}>
          <Image
            className={styles.imageSecond}
            width="250"
            height="250"
            alt="chef cooking"
            src="/tasting.jpg"
          ></Image>
          {/* // Image by{" "} */}
          {/* <a href="https://www.freepik.com/free-vector/hand-drawn-iranian-woman-illustration_33579205.htm#query=illustrations%20cooking&position=4&from_view=search&track=ais"> */}
          {/* Freepik */}
          {/* </a> */}
        </span>
      </div>
    </>
  );
};
export default SubHeading;
