/* eslint-disable react/prop-types */

import { getImageUrl } from "../../../api/common";

export default function ChatRight({ message }) {
    return (
        <>
            {/* chat-right */}
            <div className="d-flex justify-content-end mb-4">
                <div className="d-flex">
                    <div className="me-3 text-end">
                        <small>Bạn</small>
                        <div className="d-flex">
                            <div className="card mt-2 rounded-top-md-end-0 bg-primary text-white">
                                <div className="card-body text-start p-3">
                                    <p className="mb-0">
                                        {message && message.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src={message && message.user.profile_picture ? getImageUrl(message.user.profile_picture) : '/avatarDefault.jpg'}
                        alt=""
                        className="rounded-circle avatar-md"
                    />
                </div>
            </div>
        </>
    )
}
