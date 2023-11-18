import styles from "./CartItem.module.scss";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { drinkId, name, quantity, totalPrice } = item;

  return (
    <li className={styles.item}>
      <p>
        {quantity}&times; {name}
      </p>
      <div className={styles.buttonContainer}>
        <span>{totalPrice}&#8381;</span>
        <UpdateItemQuantity drinkId={drinkId} quantity={quantity} />
        <DeleteItem drinkId={drinkId} />
      </div>
    </li>
  );
}

export default CartItem;
