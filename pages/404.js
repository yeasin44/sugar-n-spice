import Link from "next/link";
import styles from "../styles/Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.neon}>404 Page Not Found</h1>
    </div>
  );
};

export default Error;
