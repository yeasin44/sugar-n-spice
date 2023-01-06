import Link from "next/link";
import styles from "../styles/Error.module.css";

const Error = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.neon}>404 Page Not Found</h1>
      {/* <Link href="/home">
        <button className="btn btn-primary flex justify-center items-center mouse-pointer">
          Back to home
        </button>
      </Link> */}
    </div>
  );
};

export default Error;
