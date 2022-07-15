import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GuarderRoute = (props) => {
    const auth = useSelector(state => state.loginReducer);
    if (!auth.role) 
        return <Navigate to="/" />

    const isAuthorized = props.Roles.includes(auth.role);
    return isAuthorized ? <props.Component /> : <Navigate to="/" />
};

export const GuardedRoute = GuarderRoute;