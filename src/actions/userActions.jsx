export const addUser=(newUsers)=>{
    newUsers.id=Math.random()
    return{
        
        type:"ADD_USER",
        payload: newUsers
    }
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