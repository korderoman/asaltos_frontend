import React, { JSX } from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert';

export interface NotificationProps {
    message: string;
    openSnackbar: boolean;
    severity:string ;
    onHandleSnackBarClose: (
        event: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => void;
}

const Notification = (props: NotificationProps): JSX.Element => {
    return (
        <section id={"register-snackbar"}>
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={props.openSnackbar}
                autoHideDuration={3000}
                onClose={props.onHandleSnackBarClose}
            >
                <Alert
                    onClose={props.onHandleSnackBarClose}
                    severity={props.severity}
                    variant="filled"
                    sx={{width:"100%"}}
                >   <span className={"text-white"}>{props.message}</span></Alert>
            </Snackbar>
        </section>
    );
};
export default Notification;
