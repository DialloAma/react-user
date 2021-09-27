export const addUser=(newUsers)=>{
    newUsers.id=Math.random()
    return({getFirestore})=>{
        getFirestore().collection('users').add(newUsers).then((doc)=>{
            /*dispatch({
                type:"ADD_USER",
                payload: newUsers  
             }) */
             console.log(doc)
        })
       
   }
  /*  return{
        
        type:"ADD_USER",
        payload: newUsers
    }*/
}

export const delletUser=(id)=>{
    return{
        type:"DELET_USER",
        payload: id
    }
}

export const updateUser=(updat)=>{
    return{
        type:"UPDATE_USER",
        payload : updat
    }
}
export const AllUsers=()=>{
    return(dispatch,state,{getFirestore})=>{
        getFirestore().collection('users').onSnapshot((snapshot)=>{
            let Users=[];
            snapshot.forEach((doc)=>{
               Users.push(doc.data())
              
            })
            dispatch({
                type:"ALL-USERS",
                payload: Users
            })    
            
        })
    }
}