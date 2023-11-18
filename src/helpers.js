export function calculateDelivery() {
  // 30min
  return 30 * 60 * 1000;
}

export function formatDeliveryTime(calculatedDelivery) {
  const rawEstimatedDelivery = new Date(Date.now() + calculatedDelivery);

  const year = rawEstimatedDelivery.getFullYear();
  const month = `${rawEstimatedDelivery.getMonth()}`.padStart(2, 0);
  const day = `${rawEstimatedDelivery.getDate()}`.padStart(2, 0);
  const hour = `${rawEstimatedDelivery.getHours()}`.padStart(2, 0);
  const min = `${rawEstimatedDelivery.getMinutes()}`.padStart(2, 0);

  return `${day}/${month}/${year}, ${hour}:${min}:00`;
}
