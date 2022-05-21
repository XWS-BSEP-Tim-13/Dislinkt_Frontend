const stateDeclaration = {
    role : '',
    token : '',
    username : 'stefanljubovic'
};

const loginReducer = (state=stateDeclaration,action) =>{
    switch(action.type){
        case 'LOGIN':
            console.log(action.data)
            return state =action.data
        case 'LOGOUT':
            return state =stateDeclaration
        default:
            return state;
    }
};

export default loginReducer;