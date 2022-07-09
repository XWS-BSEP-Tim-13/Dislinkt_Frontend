
export const login = (data) =>{
    return{
        type: 'LOGIN',
        data: data
    };
}

export const notifications = (flag) =>{
    return{
        type: 'NOTIFICATIONS',
        data: flag
    }
}

export const logout = () =>{
    return{
        type: 'LOGOUT',
    };
}