

export function createUser(userData) {
  console.log("in create user");
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  console.log("in check user");
  return new Promise(async (resolve, reject) => {
   
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });

      if(response.ok){
        const data = await response.json();
        console.log({data})
        resolve( {data} );
      }else {
        const err = await response.json();
        // console.log({err});
        reject(err );
      }
      
    } catch(err)
    {
      reject(err );
    }
    // TODO: on server it will only return some info of user (not password)
  });
}

export function signOut(userId) {
  console.log("in signout user");
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
