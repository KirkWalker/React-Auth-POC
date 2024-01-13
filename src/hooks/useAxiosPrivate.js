import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {

        //Intercepts the initial api requests and adds the accessToken
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );


        //this intercepts all api call responses and handles 403 (token expired error messages). If the token is successfully refreshed the original request is resent
        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config; //we track the prev request so we can resend after the token refreshes
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true; //this ensures only one retry
                    const newAccessToken = await refresh(); //our useRefreshToken custom hook
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);//new request is sent
                }
                //console.log('useAxiosPrivate err:',error);
                return Promise.reject(error);//this means the refresh has failed
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;