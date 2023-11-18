import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiDelivery";

function useOrder(orderId) {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["order", orderId],
    queryFn: () => getOrder(orderId),
  });

  return { isLoading, data, isError, error };
}

export default useOrder;
