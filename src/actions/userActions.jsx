export const addUser = (newUsers) => {
 // newUsers.id = Math.random();
  return (dispatch,state,{ getFirestore }) => {
    getFirestore()
      .collection("users")
      .add({...newUsers,timestamp:getFirestore().FieldValue.serverTimestamp()})
      .then((doc) => {
        /*dispatch({
                type:"ADD_USER",
                payload: newUsers  
             }) */
      });
  };
  /*  return{
        
        type:"ADD_USER",
        payload: newUsers
    }*/
};

export const delletUser = (id) => {
  return(dispatch,state,{getFirestore})=>{
         getFirestore().collection('users').doc(id).delete().then(()=>{
           console.log('succeffuly deleted')
         })
  }
 /* return {
    type: "DELET_USER",
    payload: id,
  };*/
};

export const updateUser = (updat) => {
  return(dispatch,state,{getFirestore})=>{
    getFirestore().collection('users').doc(updat.id).set(updat).then(()=>{
      console.log('succeffuly updated')
    })

  }
/*  return {
    type: "UPDATE_USER",
    payload: updat,
  };*/
};
export const AllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users").orderBy('timestamp','desc')  //desc: up to down asc:dow to up
      .onSnapshot((snapshot) => {
        let Users = [];
        snapshot.forEach((doc) => {
          Users.push({...doc.data(),id:doc.id});
        });
        dispatch({
          type: "ALL-USERS",
          payload: Users,
        });
      });
  };
};
