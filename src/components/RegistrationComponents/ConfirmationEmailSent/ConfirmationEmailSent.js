import classes from './ConfirmationEmailSent.module.css';

function ConfirmationEmailSent(props) {
    return (
        <div className={classes.message}>
            <p>The activation link has been sent to your e-mail address.</p>
            <p>Please check your mailbox to activate your account!</p>
        </div>
    );
}

export default ConfirmationEmailSent;