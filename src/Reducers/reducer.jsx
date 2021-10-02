


const reducer = (state={users:[]},action) => {
    switch(action.type){
      /*  case 'ADD_USER':
         return {
             ...state, users : [...state.users, action.payload]
         }
         case 'DELET_USER':
             return{
                 ...state, users: state.users.filter((user) => user.id !== action.payload)
             }
        case 'UPDATE_USER':
            return {
               ...state,  users: state.users.map((user) => {
                    if(user.id === action.payload.id) {
                        return action.payload
                    }  
                    return user
                })
                
            } */
        case 'ALL-USERS':
            return{
                ...state, users: action.payload
            }    
        default:
            return state
    }
  
}

export default reducer;
