 async function asyncFetch(method, token=null, data=null, endpoint){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      method: method,
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: 'follow'
    };
    try{
    const fetched = await fetch(endpoint, requestOptions)
      return fetched.json()
    }catch(err){
      console.log("async",err.message)
    }
}

export default asyncFetch