import { Link } from "react-router-dom";

import styles from "./EmptyCart.module.scss";

function EmptyCart() {
  return (
    <div className={styles.container}>
      <Link to="/delivery/menu">&larr; Back to menu</Link>

      <p>Your cart is still empty. Start adding some drinks 🙂</p>
    </div>
  );
}

export default EmptyCart;
