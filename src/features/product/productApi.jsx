
export function fetchAllProducts() {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products")
        const data  = await response.json()
        resolve({data})
    });

}

export function fetchProductsByFilter(filter, sort, pagination) {
    // filter = {"category": ["smartphone", "laptop"]}
    // sort = {_sort: "price", _order: "desc"}
    // pagination = {_page: 1, _limit:10}
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
    for (let key in pagination) {
        querystring += `${key}=${pagination[key]}&`

    }
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/products?"+querystring)
        const data  = await response.json()
        const totalItems = await response.headers.get('X-Total-Count')
        resolve({data: {products: data, totalItems: +totalItems}})
    });

}