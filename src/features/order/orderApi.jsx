
export function createOrder(order) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/orders", {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {'content-type': "application/json"}
        })
        const data  = await response.json()
        resolve({data})
    });

}