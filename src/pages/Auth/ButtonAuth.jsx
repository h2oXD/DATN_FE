/* eslint-disable react/prop-types */
// import React from 'react'

export default function ButtonAuth(props) {
    return (
        <>
            <button
                className={props.classData}
                data-bs-toggle="modal"
                data-bs-target={props.dataTarget}
            >
                {props.value}
            </button>
        </>
    )
}
