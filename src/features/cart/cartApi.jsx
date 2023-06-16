
export function addToCart(item) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/cart", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {'content-type': "application/json"}
        })
        const data  = await response.json()
        resolve({data})
    });

}

export function fetchItemsByUserId(userId) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/cart?user="+userId)
        const data  = await response.json()
        resolve({data})
    });

}

export function updateCart(update) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/cart/"+update.id, {
            method: 'PATCH',
            body: JSON.stringify(update),
            headers: {'content-type': "application/json"}
        })
        const data  = await response.json()
        resolve({data})
    });

}

export function deleteItemFromCart(itemId) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/cart/"+itemId, {
            method: 'DELETE',
            headers: {'content-type': "application/json"}
        })
        // eslint-disable-next-line no-unused-vars
        const data  = await response.json()
        resolve({data: {id: itemId}})
    });

}