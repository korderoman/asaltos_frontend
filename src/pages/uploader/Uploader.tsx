import {JSX, useState,} from "react";
import {useForm} from "react-hook-form";
import {UploaderFormInterface} from "./common/interfaces";
import UseUploader from "./common/hooks/useUploader.tsx";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import {SnackbarCloseReason} from "@mui/material/Snackbar";
import UploaderNotification from "./common/UploaderNotification.tsx";

const Uploader=():JSX.Element=>{
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        watch
    } = useForm<UploaderFormInterface>({defaultValues:{file:null, url:null}});
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);
    const {isLoadingUpload, uploadFile, uploadFileResponse, uploadUrl} = UseUploader({setOpenSnackbar});
   /* const requiredFile:RegisterOptions<UploaderFormInterface,'file'>={required:"Debe subir un archivo"}
    const requiredUrl:RegisterOptions<UploaderFormInterface,'url'>={required:"Debe agregar una url"}*/
    const videoValue: File| null=watch('file');
    const urlValue: string | null=watch('url');

    const onHandleSnackBarClose = (
        _: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ): void => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnackbar(false);
    };
    const onSubmitVideo=async (): Promise<void>=>{
        const data:UploaderFormInterface = getValues()
        console.log(data)
        if(data.file){
            await uploadFile(data);
        }
        if(data.url){
            await uploadUrl(data);
        }

        reset();
    }
    return (
        <>
            <section className={"container mt-5"}>
                <form onSubmit={handleSubmit(onSubmitVideo)} encType={"multipart/form-data"}>
                    <div className={"d-flex flex-row justify-content-center align-items-center mb-3"}>
                        <div className={"w-50"}>
                            <div className={"mx-2"}>
                                <input
                                    type="file"
                                    id="file"
                                    className={"form-control"}
                                    accept=".mp4"
                                    {...register("file")}
                                />
                            </div>
                        </div>
                        <div className={"mx-2"}>
                            <button
                                type="submit"
                                name={"submitVideo"}
                                className={"btn btn-primary"}
                                disabled={!videoValue || isLoadingUpload}
                            >Analizar vídeo {isLoadingUpload && (
                                <span className={"ms-2 loading-spinner"}>
                                    <AiOutlineLoading3Quarters className={"loading-spinner"}/>
                                    </span>
                            )}
                            </button>
                        </div>
                    </div>
                    <div className={"d-flex flex-row justify-content-center align-items-center"}>
                        <div className={"w-50"}>
                            <div className={"mx-2"}>
                                <input
                                    type="text"
                                    id="url"
                                    className={"form-control"}
                                    {...register("url")}
                                />
                            </div>
                        </div>
                        <div className={"mx-2"}>
                            <button
                                type="submit"
                                name={"submitUrl"}
                                className={"btn btn-primary"}
                                disabled={!urlValue || isLoadingUpload}
                            >Analizar vídeo {isLoadingUpload && (
                                <span className={"ms-2 loading-spinner"}>
                                    <AiOutlineLoading3Quarters className={"loading-spinner"}/>
                                    </span>
                            )}
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            <UploaderNotification
                onHandleSnackBarClose={onHandleSnackBarClose}
                openSnackbar={openSnackbar}
                uploadFileResponse={uploadFileResponse}
            />
        </>

    )
}
export default Uploader;
