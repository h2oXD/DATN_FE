/* eslint-disable react/prop-types */

import { useState } from "react";

function UploadImage({ onUpload, index, showUpload}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const inputId = `upload-image-${index}`; // Tạo ID duy nhất

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            const image = event.target.files[0];
            setSelectedImage(URL.createObjectURL(image));
            onUpload(image); // Gửi file ảnh lên component cha
        }
    };

    if (!showUpload) { // Thêm điều kiện ẩn UploadImage
        return null;
    }

    return (
        <div style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
            <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} id={inputId} /> {/* Sử dụng ID duy nhất */}
            <label htmlFor={inputId} style={{ cursor: 'pointer' }}> {/* Sử dụng ID duy nhất */}
                <i className="fe fe-upload cursor-pointer p-1 rounded border"></i>
            </label>
            {selectedImage && <img src={selectedImage} alt="Uploaded" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
        </div>
    );
}

export default UploadImage;