import { useParams } from "react-router-dom";

import OrderItem from "./OrderItem";
import useOrder from "./useOrder";
import Error from "../../ui/Error";
import Loader from "../../ui/Loader";
import styles from "./Order.module.scss";
import { getMenu } from "../menu/menuSlice";
import { useSelector } from "react-redux";

function Order() {
  const { orderId } = useParams();

  const { isLoading, data, isError, error } = useOrder(orderId);
  const menu = useSelector(getMenu);

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;
  if (!data.length) return <h1>{`Couldn't find order #${orderId}...`}</h1>;

  const { cart, numOrder, priceDelivery, estimatedDelivery, priceOrder } =
    data[0];

  return (
    <div className={styles.orderContainer}>
      <div className={styles.box}>
        <h2>Order #{numOrder}</h2>
      </div>

      <div className={styles.box}>
        <p>Estimated delivery: {estimatedDelivery}</p>
      </div>

      <ul className={styles.list}>
        {cart.map((item) => (
          <OrderItem
            item={item}
            ingredients={menu.find((el) => el.id === item.drinkId).ingredients}
            key={item.drinkId}
          />
        ))}
      </ul>

      <div className={styles.box}>
        <p>Price drinks: {priceOrder}&#8381;</p>
        <p>Price delivery: {priceDelivery}&#8381;</p>
        <p>To pay on delivery: {priceOrder + priceDelivery}&#8381;</p>
      </div>
    </div>
  );
}

export default Order;
