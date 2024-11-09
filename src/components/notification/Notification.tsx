import React, { JSX } from "react";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert, {AlertColor, AlertPropsColorOverrides} from '@mui/material/Alert';
import {OverridableStringUnion} from "@mui/types";

export interface NotificationProps {
    message: string;
    openSnackbar: boolean;
    severity:OverridableStringUnion<AlertColor, AlertPropsColorOverrides> | undefined ;
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
                autoHideDuration={null}
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
