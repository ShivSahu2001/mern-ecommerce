
export function fetchAllProducts() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products")
        const data  = await response.json()
        resolve({data})
    });

}

export function fetchProductsByFilter(filter) {
    // filter = {"category": ["smartphone", "laptop"]}
    // sort = {_sort: "price", _order: "desc"}
    let querystring = "";

    for (const key in filter) {
        querystring += `${key}=${filter[key]}&`
    }
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products?"+querystring)
        const data  = await response.json()
        resolve({data})
    });

}