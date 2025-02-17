/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// LecturerContext.js
import { createContext, useState, useEffect, useContext } from "react";
import axiosClient from "../api/axios";

const LecturerContext = createContext();

export const LecturerProvider = ({ children }) => {
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [categories, setCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(true); 
    const [errorCategories, setErrorCategories] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axiosClient.get("lecturer/courses"); // API bạn muốn gọi
                if (isMounted) {
                    setCourseData(res.data);
                }
            } catch (error) {
                console.error(error);
                if (isMounted) {
                    setError(error);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    },[]);

    useEffect(() => {
        let isMounted = true;

        const fetchCategories = async () => {
            setLoadingCategories(true);
            setErrorCategories(null);
            try {
                const response = await axiosClient.get("/categories");
                if (isMounted) {
                    setCategories(response.data.data);
                }
            } catch (error) {
                console.error(error);
                if (isMounted) {
                    setErrorCategories(error);
                }
            } finally {
                if (isMounted) {
                    setLoadingCategories(false);
                }
            }
        };

        fetchCategories();

        return () => {
            isMounted = false;
        };
    }, []);

    const contextValue = {
        courseData,
        loading,
        error,
        categories,        
        loadingCategories,
        errorCategories,   
    };

    return (
        <LecturerContext.Provider value={contextValue}>
            {children}
        </LecturerContext.Provider>
    );
};

export const useLecturerContext = () => useContext(LecturerContext); // Custom hook để dễ sử dụng