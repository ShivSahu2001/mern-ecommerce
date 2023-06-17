export function fetchLoggedInUserOrders(userId) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders/?user.id=" +userId);
    const data = await response.json();
    resolve({ data });
  });
}
