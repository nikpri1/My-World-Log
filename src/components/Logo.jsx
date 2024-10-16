import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/logo.png" alt="My World Log logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
