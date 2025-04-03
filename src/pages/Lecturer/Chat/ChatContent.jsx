/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef, useState } from "react";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";
import { StoreContext } from "../../../contexts/StoreProvider";
import echo from "../../../api/pusher";
import { getImageUrl } from "../../../api/common";

export default function ChatContent({ contentChat, setReset }) {
    const chatEndRef = useRef(null);
    const { user } = useContext(StoreContext);
    const [onlineUser, setOnlineUser] = useState([])
    useEffect(() => {
        // Mỗi khi `messages` thay đổi, cuộn xuống dưới cùng
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [contentChat]);

    useEffect(() => {
        const channel = echo.join(`chat-room.${contentChat.id}`);
        channel.listen('NewChatMessage', (event) => {
            console.log(event);
            setReset(pre => !pre)
        })
            .here(users => {
                console.log('Người dùng đang ở đây', users);
                setOnlineUser(users)
            })
            .joining(user => {
                console.log('Vừa mới vào', user);
                setOnlineUser(pre => [...pre, user])
            })
            .leaving(user => {
                console.log('Người dùng đã rời đi', user);
                setOnlineUser(pre => pre.filter(u => u.id !== user.id))
            })
    }, [contentChat.id, setReset])

    return (
        <>
            <div className="px-4 py-4 tw-max-h-[454px] tw-min-h-[480px] tw-overflow-auto">
                {contentChat && contentChat.messages && contentChat.messages.length > 0 && contentChat.messages.map((message, index) => (
                    <div key={index}>
                        {user && user.id != message.user_id && <ChatLeft message={message} />}
                        {user && user.id == message.user_id && <ChatRight message={message} />}
                    </div>
                ))}
                <div ref={chatEndRef} />
            </div>
            <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasChatInfo"
                aria-labelledby="offcanvasChatInfoLabel"
            >
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="offcanvasChatInfoLabel">
                        Thành viên
                    </h3>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    {onlineUser && onlineUser.length > 0 && <h4>Trực tuyến</h4>}
                    {onlineUser && onlineUser.length > 0 && onlineUser.map((u, index) => (
                        <div key={index} className="my-2">
                            <div>
                                <div className="d-flex">
                                    <div className="avatar avatar-md avatar-indicators avatar-online">
                                        <img
                                            src={u && u.profile_picture ? getImageUrl(u.profile_picture) : '/avatarDefault.jpg'}
                                            alt=""
                                            className="rounded-circle"
                                        />
                                    </div>
                                    <div className="ms-2">
                                        <h5 className="mb-0">{u && u.name}{user && user.id == u.id && '(Bạn)'}</h5>
                                        <p className="mb-0">Online</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {onlineUser && onlineUser.length > 0 && <h4 className="mt-4">Ngoại tuyến</h4>}
                    {contentChat && contentChat.users && contentChat.users
                        .filter(user => !onlineUser.some(online => online.id === user.id))
                        .map((user, index) => (
                            <div key={index} className="my-2">
                                <div>
                                    <div className="d-flex">
                                        <div className="avatar avatar-md avatar-indicators avatar-offline">
                                            <img
                                                src={user && user.profile_picture ? getImageUrl(user.profile_picture) : '/avatarDefault.jpg'}
                                                alt=""
                                                className="rounded-circle"
                                            />
                                        </div>
                                        <div className="ms-2">
                                            <h5 className="mb-0">{user && user.name}</h5>
                                            <p className="mb-0">Offiline</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                </div>
            </div>
        </>
    )
}
