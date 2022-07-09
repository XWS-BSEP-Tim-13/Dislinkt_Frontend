const stateDeclaration = {
    notification: false
};

const notificationReducer = (state = stateDeclaration, action) => {
    switch (action.type) {
        case 'NOTIFICATIONS':
            return state = action.data
        default:
            return state;
    }
};

export default notificationReducer;