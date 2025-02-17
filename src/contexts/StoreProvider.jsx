import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { getCategories,
    //  getTags, 
     getUser } from '../api/apiService';

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext();

// eslint-disable-next-line react/prop-types
export const StoreProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [categorires, setCategorires] = useState([])
    // const [tags, setTags] = useState([])

    const token = Cookies.get('token')

    useEffect(() => {
        const fetchUser = async () => {
            if (token) {
                try {
                    const res = await getUser()
                    setUser(res.data)
                } catch (error) {
                    console.log(error);
                }
            }
        }
        fetchUser()
    }, [token])
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await getCategories()
                setCategorires(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        // const fetchTags = async () => {
        //     try {
        //         const res = await getTags()
        //         setTags(res.data)
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        fetchCategories()
        // fetchTags()
    }, [])

    return (
        <StoreContext.Provider value={{
            user, categorires, 
            // tags,
            setUser, setCategorires
            // , setTags
        }}>
            {children}
        </StoreContext.Provider>
    )
}
