import {UploaderFormInterface} from "../interfaces";
import {useState} from "react";
import axios, {AxiosResponse} from "axios";
import {StatusResponse} from "../../../../../common/interfaces";
export interface UploaderProps {
    setOpenSnackbar: React.Dispatch<React.SetStateAction<boolean>>;
}
const UseUploader=(props:UploaderProps) => {
    const [isLoadingUpload, setIsLoadingUpload] = useState<boolean>(false);
    const [uploadFileResponse,setUploadFileResponse] = useState<StatusResponse | null>(null);



    const uploadFile=async(data:UploaderFormInterface): Promise<void> => {
        const uploadPath: string = import.meta.env.VITE_BACKEND_UPLOAD_ENDPOINT_VM;
        const formData= new FormData();
        // @ts-ignore
        formData.append("file",data.file[0]);
        try{
            setIsLoadingUpload(true);
            await axios.post(`${uploadPath}/upload/v1`, formData,{headers:{
                    "Content-Type":"multipart/form-data",
                }})
            const response:AxiosResponse<StatusResponse> = await axios.post(`${uploadPath}/upload/v2`, formData,{headers:{
                "Content-Type":"multipart/form-data",
                }})
            setUploadFileResponse(response.data)
        }catch(e){
            console.error(e);
        }finally {
            setIsLoadingUpload(false);
        }
    }

    const uploadUrl=async(data:UploaderFormInterface): Promise<void> => {
        const uploadPath: string = import.meta.env.VITE_BACKEND_UPLOAD_ENDPOINT_VM;
        const formData= new FormData();
        // @ts-ignore
        formData.append("url",data.url);
        try{
            setIsLoadingUpload(true);
            const response:AxiosResponse<StatusResponse> = await axios.post(`${uploadPath}/upload/v3`, formData,{headers:{
                    'Content-Type': 'application/json',
                }})
            console.log("response",response)
            props.setOpenSnackbar(true)
            setUploadFileResponse(response.data)
        }catch(e){
            console.error(e);
        }finally {
            setIsLoadingUpload(false);
        }
    }
    return {
        isLoadingUpload,
        uploadFile,
        uploadFileResponse,
        uploadUrl
    }
}
export default UseUploader;
