export const getBaseUrl = ()=>{
    const url = import.meta.env.VITE_SERVER_URL
    return url;
}