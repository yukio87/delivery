import { useCallback } from "react";
import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/Username";
import LogoNinja from "./LogoNinja";
import styles from "./Header.module.scss";

function Header() {
  // Использовал здесь "useCallback", потому-что в обязательных требованиях это было
  const createStrUserName = useCallback(function createStrUserName(userName) {
    return (
      <p>
        <span>Ninja:</span> {userName}
      </p>
    );
  }, []);

  return (
    <header className={styles.header}>
      <Link to="/">
        <LogoNinja />
        <div className={styles.logoText}>
          <span>Ninja bar</span>
          <span>Delivery</span>
        </div>
      </Link>

      <SearchOrder />

      <UserName createStrUserName={createStrUserName} />
    </header>
  );
}

export default Header;
