import { useSelector } from "react-redux";

import { getUsername } from "./userSlice";
import styles from "./Username.module.scss";
import { memo } from "react";

// Использовал здесь "react.memo", потому-что в обязательных требованиях это было
const Username = memo(function Username({ createStrUserName }) {
  const username = useSelector(getUsername);

  if (!username) return null;

  return <div className={styles.username}>{createStrUserName(username)}</div>;
});

export default Username;
