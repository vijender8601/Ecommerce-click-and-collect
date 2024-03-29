

export function createUser(userData) {
  console.log("in create user");
  return new Promise(async (resolve) => {
    const response = await fetch("/auth/signup", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });

    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function loginUser(loginInfo) {
  // console.log("in check user");
  return new Promise(async (resolve, reject) => {
   
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: { "content-type": "application/json" },
      });

      if(response.ok){
        const data = await response.json();
        // console.log({data})
        resolve( {data} );
      }else {
        const err = await response.text();
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


export function checkAuth() {
  // console.log("in check user");
  return new Promise(async (resolve, reject) => {
   
    try {
      const response = await fetch("/auth/check");

      if(response.ok){
        const data = await response.json();
        console.log({data})
        resolve( {data} );
      }else {
        const err = await response.text();
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

export function resetPasswordRequest(email) {
  // console.log("in check user");
  return new Promise(async (resolve, reject) => {
   
    try {
      const response = await fetch("/auth/reset-password-request",{
        method: "POST",
        body: JSON.stringify({email}),
        headers: { "content-type": "application/json" },
      });

      if(response.ok){
        const data = await response.json();
        console.log({data})
        resolve( {data} );
      }else {
        const err = await response.text();
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

export function resetPassword(data) {
  // console.log("in check user");
  return new Promise(async (resolve, reject) => {
   
    try {
      const response = await fetch("/auth/reset-password",{
        method: "POST",
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      });

      if(response.ok){
        const data = await response.json();
        // console.log({data})
        resolve( {data} );
      }else {
        const err = await response.text();
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

export function signOut() {
  return new Promise(async (resolve, reject) => {
   
    try {
      const response = await fetch("/auth/logout");

      if(response.ok){
        resolve( {data: "success"} );
      }else {
        const err = await response.text();
        // console.log({err});
        reject(err );
      }
      
    } catch(err)
    {
      reject(err);
    }
    // TODO: on server it will only return some info of user (not password)
  });
}
