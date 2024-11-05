import {UploaderFormInterface} from "../interfaces";
import {useState} from "react";
import axios, {AxiosResponse} from "axios";
import {StatusResponse} from "../../../../../common/interfaces";
export interface UploaderInterface {
    formData:UploaderFormInterface
}
const UseUploader=() => {
    const [isLoadingUpload, setIsLoadingUpload] = useState<boolean>(false);
    const uploadFile=async(data:UploaderFormInterface): Promise<void> => {
        const uploadPath: string = import.meta.env.VITE_BACKEND_UPLOAD_ENDPOINT;
        console.log("path", uploadPath)
        const formData= new FormData();
        // @ts-ignore
        formData.append("file",data.file[0]);
        try{
            setIsLoadingUpload(true);
            const response:AxiosResponse<StatusResponse> = await axios.post(uploadPath, formData,{headers:{
                "Content-Type":"multipart/form-data",
                }})
            console.log(response.data)
        }catch(e){
            console.error(e);
        }finally {
            setIsLoadingUpload(false);
        }
    }
    return {
        isLoadingUpload,
        uploadFile,
    }
}
export default UseUploader;
