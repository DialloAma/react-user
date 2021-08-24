export const addUser=(newUsers)=>{
    newUsers.id=Math.random()
    return{
        
        type:"ADD_USER",
        payload: newUsers
    }
}
