import {JSX} from "react";
import {RegisterOptions, useForm} from "react-hook-form";
import {UploaderFormInterface} from "./common/interfaces";
import UseUploader from "./common/hooks/useUploader.tsx";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const Uploader=():JSX.Element=>{
    const {
        register,
        handleSubmit,
        getValues,
        formState:{isValid}
    } = useForm<UploaderFormInterface>({defaultValues:{file:null}});
    const {isLoadingUpload, uploadFile} = UseUploader();
    const requiredFile:RegisterOptions<UploaderFormInterface,'file'>={required:"Debe subir un archivo"}
    const onSubmit=async (): Promise<void>=>{
        const data:UploaderFormInterface = getValues()
        await uploadFile(data)
    }
    return (
        <section className={"container mt-5"}>
            <form onSubmit={handleSubmit(onSubmit)} encType={"multipart/form-data"}>
                <div className={"d-flex flex-row justify-content-center"}>
                    <div className={"mb-3 row"}>
                        <div className={"col-auto"}>
                            <input
                                type="file"
                                id="file"
                                className={"form-control"}
                                accept=".mp4"
                                {...register("file", requiredFile)}
                            />
                        </div>
                        <div className={"col-auto"}>
                            <button
                                type="submit"
                                className={"btn btn-primary mb-3"}
                                disabled={!isValid || isLoadingUpload}
                            >Subir video {isLoadingUpload && (
                                <span className={"ms-2 loading-spinner"}>
                        <AiOutlineLoading3Quarters
                            className={"loading-spinner"}
                        />
                      </span>
                            )}</button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
export default Uploader;
