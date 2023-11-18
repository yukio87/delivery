import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CreateUser from "../features/user/CreateUser";
import { getUsername } from "../features/user/userSlice";
import styles from "./Home.module.scss";

function Home() {
  const username = useSelector(getUsername);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Amazing drinks
        <br />
        <span>from the best bartenders</span>
      </h1>

      {username ? (
        <Link to="/menu" className={styles.button}>
          Continue ordering, {username}
        </Link>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
