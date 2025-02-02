import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { getInfo } from '../api/apiService';

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)

    const token = Cookies.get('token')
    
    useEffect(()=>{
        if(token){
            getInfo()
            .then(res => {
                setUserInfo(res.data)
            })
            .catch(error =>{
                console.log(error);
            })
        }
    },[token])
    
    return (
        <StoreContext.Provider value={{userInfo}}>
            {children}
        </StoreContext.Provider>
    )
}
