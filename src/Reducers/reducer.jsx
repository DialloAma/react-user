/*const user = {
    users: [
        {name:'BaH',
    phone:'6254135',
    email:'amadou@yahoo.fr',
    password:'14563'}
]
}*/


const reducer = (state={users:[]},action) => {
    switch(action.type){
        case 'ADD_USER':
         return {
             ...state, users : [...state.users, action.payload]
         }
         case 'DELET_USER':
             return{
                 ...state, users: state.users.filter((user) => user.id !== action.payload)
             }
        default:
            return state
    }
  
}

export default reducer;
