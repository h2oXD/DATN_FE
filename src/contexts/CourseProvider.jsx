/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// CourseContext.js
import { createContext, useState, useEffect, useContext } from 'react';

import { useParams } from "react-router-dom";
import { showCourseBasic } from '../api/apiService';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const { course_id } = useParams();
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchCourseData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await showCourseBasic(course_id);
                if (isMounted) {
                    setCourseData(res.data.data);
                }
            } catch (err) {
                console.error(err);
                setError(err);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchCourseData();

        return () => { isMounted = false; };
    }, [course_id]);

    return (
        <CourseContext.Provider value={{ courseData, loading, error }}>
            {children}
        </CourseContext.Provider>
    );
};

export const useCourseContext = () => useContext(CourseContext); // Custom hook để dễ sử dụng