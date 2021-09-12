import { authToken } from '../utility';
import {connect} from '../api/flashcards'


const getSets = async () => {
    // console.log("auth token", authToken().Authorization)
    let response
  
  
    if(authToken().Authorization)
    {
      const config = {
        headers: {'Authorization': authToken().Authorization}
      }
      try {
        response = await connect.get('/sets', config)
        console.log("getSets", response)
        return response.data;
      } catch {
        console.log(response)
        return null;
      }
    }
    else
    {
      console.log("You are not logged in")
    }
}

const fetchSet = async (id) => {
    // console.log("auth token", authToken().Authorization)
    let response
  
    if(authToken().Authorization)
    {
      const config = {
        headers: {'Authorization': authToken().Authorization}
      }
      try {
        response = await connect.get(`/sets/${id}`, config)
        console.log("getSets", response)
        return response.data;
      } catch {
        console.log(response)
        return null;
      }
    }
    else
    {
      console.log("You are not logged in")
    }
}


// const login = async (email, password) => {  
//     const response = await connect.post('/users/login',{ email, password }) 
  
//     if(response.data.user)
//     {
//         let user = response.data.user
//         user.token = response.data.token
//         localStorage.setItem('user', JSON.stringify(user));
//         return {user, error:null}
//     }
//     else
//     {
//         return {error:"Unable to log in", user:null}
//     }
// }


export const setService = {
    getSets,
    fetchSet,
};

