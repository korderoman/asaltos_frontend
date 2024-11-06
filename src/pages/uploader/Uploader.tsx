import {JSX,} from "react";
import {useForm} from "react-hook-form";
import {UploaderFormInterface} from "./common/interfaces";
import UseUploader from "./common/hooks/useUploader.tsx";
import {AiOutlineLoading3Quarters} from "react-icons/ai";
import VideoPlayer from "../../components/video-player/VideoPlayer.tsx";

const Uploader=():JSX.Element=>{
    const {
        register,
        handleSubmit,
        getValues,
        reset,
        watch
    } = useForm<UploaderFormInterface>({defaultValues:{file:null, url:null}});
    const {isLoadingUpload, uploadFile, uploadFileResponse, uploadUrl} = UseUploader();
   /* const requiredFile:RegisterOptions<UploaderFormInterface,'file'>={required:"Debe subir un archivo"}
    const requiredUrl:RegisterOptions<UploaderFormInterface,'url'>={required:"Debe agregar una url"}*/
    const videoValue: File| null=watch('file');
    const urlValue: string | null=watch('url');
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
                            >Subir video {isLoadingUpload && (
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
                            >Subir video {isLoadingUpload && (
                                <span className={"ms-2 loading-spinner"}>
                                    <AiOutlineLoading3Quarters className={"loading-spinner"}/>
                                    </span>
                            )}
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            <section className={"container mt-5 d-flex justify-content-center align-items-center"}>
                {uploadFileResponse && <VideoPlayer url={uploadFileResponse.extras.url}/>}
            </section>
        </>

    )
}
export default Uploader;
