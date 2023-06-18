export function fetchLoggedInUserOrders(userId) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/orders/?user.id=" +userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchLoggedInUser(userId) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/users/" +userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
      const response = await fetch("http://localhost:8080/users/"+update.id, {
          method: 'PATCH',
          body: JSON.stringify(update),
          headers: {'content-type': "application/json"}
      })
      const data  = await response.json()
      resolve({data})
  });

}
