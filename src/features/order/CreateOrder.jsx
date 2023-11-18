import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import { getUsername } from "../user/userSlice";
import EmptyCart from "../cart/EmptyCart";
import { LENGTH_ID } from "../../utils/constants";
import { DELIVERY_PERCENTAGE } from "../../utils/constants";
import { calculateDelivery, formatDeliveryTime } from "../../helpers";
import useCreateOrder from "./useCreateOrder";
import Error from "../../ui/Error";
import styles from "./CreateOrder.module.scss";

function CreateOrder() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutate, isPending, error, isError } = useCreateOrder();

  const calculatedDelivery = calculateDelivery();
  const estimatedDelivery = formatDeliveryTime(calculatedDelivery);
  const priceDelivery = (totalCartPrice * DELIVERY_PERCENTAGE) / 100;
  const totalPrice = totalCartPrice + priceDelivery;

  if (!cart.length) return <EmptyCart />;
  if (isError) return <Error error={error} />;

  function onSubmit(data) {
    const numOrder = nanoid(LENGTH_ID);

    const order = {
      ...data,
      numOrder,
      estimatedDelivery,
      cart,
      priceDelivery,
      priceOrder: totalPrice,
    };

    mutate(order, {
      onSuccess: (data) => navigate(`/order/${data[0].numOrder}`),
    });
  }

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.header}>Ready to order? Let&apos;s go!</h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.box}>
          <label>First Name</label>
          <input
            defaultValue={username}
            type="text"
            name="customer"
            {...register("customer")}
            required
          />
        </div>

        <div className={styles.box}>
          <label>Phone number</label>
          <input type="tel" name="phone" {...register("phone")} required />
        </div>

        <div className={styles.box}>
          <label>Address</label>
          <input type="text" name="address" {...register("address")} required />
        </div>

        <div className={styles.box}>
          <p>
            The delivery price is {DELIVERY_PERCENTAGE}%, that&apos;s{" "}
            {priceDelivery}&#8381;
          </p>
        </div>

        <div>
          <button disabled={isPending}>
            {isPending ? (
              "Placing order..."
            ) : (
              <span>Order now from {totalPrice}&#8381;</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;
