export interface StatusResponse {
    status: 'success' | 'error';
    message: string;
    extras:Extras
}

export interface Extras {
    url:string
}
