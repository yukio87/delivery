import { useDispatch, useSelector } from "react-redux";

import { addItem, getCart, getQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import styles from "./MenuItem.module.scss";

function MenuItem({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);

  const { id, name, unitPrice, ingredients, imageUrl } = item;
  const isItemInCart = cart.find((item) => item.drinkId === id) !== undefined;
  const quantity = useSelector(getQuantityById(id));

  function handleAddToCart() {
    const newItem = {
      drinkId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.itemText}>
        <p>{name}</p>
        <p>{ingredients}</p>
        <div className={styles.buttonWrapper}>
          <span>{unitPrice}&#8381;</span>
          {isItemInCart ? (
            <div className={styles.boxButtons}>
              <UpdateItemQuantity drinkId={id} quantity={quantity} />
              <DeleteItem drinkId={id} />
            </div>
          ) : (
            <button onClick={() => handleAddToCart()} className={styles.button}>
              Add to cart
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
