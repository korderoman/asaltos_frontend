import React, {JSX} from "react";
import Notification from "../../../components/notification/Notification.tsx";
import VideoPlayer from "../../../components/video-player/VideoPlayer.tsx";
import {StatusResponse} from "../../../../common/interfaces";
import {SnackbarCloseReason} from "@mui/material/Snackbar";
import {OverridableStringUnion} from "@mui/types";
import {AlertColor, AlertPropsColorOverrides} from "@mui/material/Alert";

export interface UploaderNotificationProps {
    openSnackbar: boolean;
    uploadFileResponse:StatusResponse | null;
    onHandleSnackBarClose:(_: React.SyntheticEvent | Event, reason?: SnackbarCloseReason)=>void
}
const UploaderNotification=({openSnackbar,uploadFileResponse, onHandleSnackBarClose}: UploaderNotificationProps): JSX.Element=>{
    const solveMessage=(uploadFileResponse: StatusResponse | null): string=>{
        if(uploadFileResponse?.extras.has_violence){
            return "Violencia detectada"
        }
        return "Sin violencia"
    }
    const solveUrlWithoutProcess=(uploadFileResponse: StatusResponse): string=>{
        const rawUrl:string = uploadFileResponse.extras.url;
        const step1: Array<string> = rawUrl.split("_learned");
        const step2: string = step1[0].concat("",step1[1]);
        return step2

    }

    const solveSeverity=(uploadFileResponse: StatusResponse | null): OverridableStringUnion<AlertColor, AlertPropsColorOverrides> | undefined =>{
        if(uploadFileResponse?.extras.has_violence){
            return "error"
        }
        return "success"
    }

    return (
        <>
            {uploadFileResponse && <div>
                <section id={"snackbar"}>
                    <Notification
                        message={solveMessage(uploadFileResponse)}
                        openSnackbar={openSnackbar}
                        onHandleSnackBarClose={onHandleSnackBarClose}
                        severity={solveSeverity(uploadFileResponse)}
                    />
                </section>
                <section className={"container mt-5 d-flex justify-content-center align-items-center"}>
                    <VideoPlayer url={solveUrlWithoutProcess(uploadFileResponse)}/>
                    <VideoPlayer url={uploadFileResponse.extras.url}/>
                </section>
            </div>}
        </>
    )
}

export default UploaderNotification
