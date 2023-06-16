
export function createUser(userData) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve) => {
        const response = await fetch("http://localhost:8080/users", {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {'content-type': "application/json"}
        })
        const data  = await response.json()
        resolve({data})
    });

}

export function checkUser(loginInfo) {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject)  => {
        const email  = loginInfo.email
        const password = loginInfo.password
        const response = await fetch("http://localhost:8080/users?email="+email)
        const data  = await response.json()
        console.log({data})
        if (data.length) {
            if (password === data[0].password) {
                
                resolve({data: data[0]})
            } else {

                reject({message: "Invalid Credentials"})
            }
        } else {
            reject({message: "user not found"})
        }
        resolve({data})
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