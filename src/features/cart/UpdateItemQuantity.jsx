import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import styles from "./UpdateItemQuantity.module.scss";

function UpdateItemQuantity({ drinkId, quantity }) {
  const dispatch = useDispatch();

  function handleDecreaseQuantity(drinkId) {
    dispatch(decreaseItemQuantity(drinkId));
  }

  function handleIncreaseQuantity(drinkId) {
    dispatch(increaseItemQuantity(drinkId));
  }

  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => handleDecreaseQuantity(drinkId)}>&#8722;</button>
      <span>{quantity}</span>
      <button onClick={() => handleIncreaseQuantity(drinkId)}>&#43;</button>
    </div>
  );
}

export default UpdateItemQuantity;
