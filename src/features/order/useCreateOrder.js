import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { createOrder } from "../../services/apiDelivery";
import { clearCart } from "../cart/cartSlice";

function useCreateOrder() {
  const dispatch = useDispatch();

  const { mutate, isPending, error, isError } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      dispatch(clearCart());
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { mutate, isPending, error, isError };
}

export default useCreateOrder;
