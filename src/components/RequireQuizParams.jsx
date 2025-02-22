/* eslint-disable react/prop-types */
import { useSearchParams, Navigate, useLocation } from 'react-router-dom';

function RequireQuizParams({ children }) {
    const [searchParams] = useSearchParams();
    const lessonId = searchParams.get('lessonId');
    const sectionId = searchParams.get('sectionId');
    const courseId = searchParams.get('courseId');
    const title = searchParams.get('title');
    const location = useLocation();

    if (!lessonId || !sectionId || !courseId || title) {
        // Redirect nếu thiếu một trong các tham số
        return (
            <Navigate to="/lecturer/course" state={{ from: location }} replace />
        );
    }

    // Nếu có đủ tham số, render children
    return children;
}

export default RequireQuizParams;