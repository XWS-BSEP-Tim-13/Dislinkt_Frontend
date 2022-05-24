import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CheckUserPermissionComponent = (props) => {
    const couldShow = props.loggedUserRole === props.role;
    return couldShow ? props.children : null;
};

CheckUserPermissionComponent.propTypes = {
    loggedUserRole: PropTypes.string.isRequired
};


const mapStateToProps = state => ({
    loggedUserRole: state.loginReducer.role 
});

export const CheckUserPermission = connect(mapStateToProps)(CheckUserPermissionComponent);