const stateDeclaration = {
    role : '',
    token : '',
    expire : '',
    username : 'stefanljubovic'
};

const loginReducer = (state=stateDeclaration,action) =>{
    switch(action.type){
        case 'LOGIN':
            return state =action.data
        case 'LOGOUT':
            return state =stateDeclaration
        default:
            return state;
    }
};

export default loginReducer;