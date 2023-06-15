
export function fetchAllProducts() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products")
        const data  = await response.json()
        resolve({data})
    });

}

export function fetchProductsByFilter(filter, sort) {
    // filter = {"category": ["smartphone", "laptop"]}
    // sort = {_sort: "price", _order: "desc"}
    let querystring = "";

    for (let key in filter) {
        const categoryValues = filter[key]
        if (categoryValues.length > 0) {
            const lastCategoryValue = categoryValues[categoryValues.length - 1]
            querystring += `${key}=${lastCategoryValue}&`
        }
    }
    
    for (let key in sort) {
        querystring += `${key}=${sort[key]}&`

    }
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products?"+querystring)
        const data  = await response.json()
        resolve({data})
    });

}