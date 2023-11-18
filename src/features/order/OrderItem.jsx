import styles from "./OrderItem.module.scss";

function OrderItem({ item, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className={styles.item}>
      <div className={styles.itemMainInfo}>
        <p>
          <span className={styles.quantity}>{quantity}</span> &times; {name}
        </p>
        <p>{totalPrice}&#8381;</p>
      </div>
      <p className={styles.ingredients}>{ingredients}</p>
    </li>
  );
}

export default OrderItem;
