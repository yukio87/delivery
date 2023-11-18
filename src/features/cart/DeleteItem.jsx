import { useDispatch } from "react-redux";

import { deleteItem } from "./cartSlice";
import styles from "./DeleteItem.module.scss";

function DeleteItem({ drinkId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(drinkId));
  }

  return (
    <button onClick={handleDeleteItem} className={styles.button}>
      Delete
    </button>
  );
}

export default DeleteItem;
