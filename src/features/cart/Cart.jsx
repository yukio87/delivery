import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./CartItem";
import { getUsername } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import styles from "./Cart.module.scss";

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;

  return (
    <div className={styles.container}>
      <Link to="/menu" className={styles.linkBack}>
        &larr; Back to menu
      </Link>

      <h2>Your cart, {username}</h2>
      <ul>
        {cart.map((item) => (
          <CartItem item={item} key={item.drinkId} />
        ))}
      </ul>

      <div>
        <Link className={styles.linkOrder} to="/order/new">
          Order drinks
        </Link>
        <button onClick={handleClearCart} className={styles.button}>
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
