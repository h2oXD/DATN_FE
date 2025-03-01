/* eslint-disable react/prop-types */


export default function Coding({ lesson }) {
    return (
        <>
            {/* Content */}
            <div className="px-5" style={{ width: '1000px' }}>
                <h1>coding</h1>
                {lesson.id}
            </div>
        </>
    )
}
