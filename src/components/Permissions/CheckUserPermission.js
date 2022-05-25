import { useSelector } from 'react-redux';

const CheckUserPermissionComponent = (props) => {
    const auth = useSelector(state => state.loginReducer);

    const couldShow = props.role.includes(auth.role);
    return couldShow ? props.children : null;
};

export const CheckUserPermission = (CheckUserPermissionComponent);