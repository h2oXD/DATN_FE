/* eslint-disable react/prop-types */

import { getImageUrl } from "../../../api/common";

export default function ChatLeft({ message }) {
    return (
        <>
            {/* chat-left */}
            <div className="d-flex mb-4">
                <img
                    src={message && message.user.profile_picture ? getImageUrl(message.user.profile_picture) : '/avatarDefault.jpg'}
                    alt=""
                    className="rounded-circle avatar-md"
                />
                <div className="ms-3">
                    <small>{message && message.user.name}</small>
                    <div className="d-flex">
                        <div className="card mt-2 rounded-top-md-left-0">
                            <div className="card-body p-3">
                                <p className="mb-0 text-dark">
                                    {message && message.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
