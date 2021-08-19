import {database} from 'database'

export const loginUser = (data)=>{
    const user = database.filter((user)=> data.email === user.email && data.password === user.password)
    return new Promise((resolve,reject)=>{
        user.length > 0?
            resolve({
                data: user[0],
                status: 200
            })
        :
            reject({
                status: 400,
                message: 'fail'
            })
        }
    )
}