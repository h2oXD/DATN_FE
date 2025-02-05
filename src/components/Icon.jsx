/* eslint-disable react/prop-types */
import React from "react";

const icons = {
    "chat": (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>
    ),
    "export": (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
        </svg>
    ),
    "import": (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
        </svg>

    ),
    "star": (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z">
            </path></svg>
    ),
    "clock": (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    ),
    "level-1": (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"></rect>
            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
        </svg>
    ),
    "level-2": (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"></rect>
        </svg>
    ),
    "level-3": (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"></rect>
            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"></rect>
            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"></rect>
        </svg>
    ),
};

const Icon = ({ name, size = 10, color = "", className = "" }) => {
    return (
        <span className={`icon-${name} ${className}`} style={{ width: size, height: size, color }}>
            {icons[name] ? React.cloneElement(icons[name], { width: size, height: size, stroke: color }) : null}
        </span>
    );
};

export default Icon;
