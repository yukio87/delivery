import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import styles from "./CartOverview.module.scss";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className={styles.cartOverview}>
      <p>
        <span>{totalCartQuantity} drinks</span>
        <span>{totalCartPrice}&#8381;</span>
      </p>
      <Link to="/delivery/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
