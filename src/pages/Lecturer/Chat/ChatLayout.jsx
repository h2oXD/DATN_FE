import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput";
import { useEffect, useState } from "react";
import axiosClient from "../../../api/axios";

export default function ChatLayout() {
    const [roomId, setRoomId] = useState(null)
    const [contentChat, setContentChat] = useState(null)
    const [reset, setReset] = useState(false)
    console.log(roomId);
    useEffect(() => {
        if (roomId) {
            const chat = async () => {
                try {
                    const res = await axiosClient.get(`/chat-rooms/${roomId}`)
                    console.log(res);
                    setContentChat(res.data)
                } catch (error) {
                    console.log(error);
                }
            }
            chat()
        }
    }, [roomId, reset])

    return (
        <>
            <section className="container-fluid px-0">
                <div className="row g-1">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-3 d-none d-md-block">
                        <ChatList setRoomId={setRoomId} />
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-12">
                        {contentChat && (
                            <div className="">
                                <ChatHeader contentChat={contentChat} />
                                <ChatContent contentChat={contentChat} setReset={setReset} />
                                <ChatInput contentChat={contentChat} setReset={setReset} />
                            </div>
                        )}
                        {!contentChat && (
                            <>
                                <div className="d-flex w-100 h-100 card shadow-none">
                                    <h3 className="text-center tw-mt-[200px]">Hãy bắt đầu trò truyện</h3>
                                    <h4 className="text-center">Chưa có tin nhắn nào</h4>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </section>
            <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasChatList"
                aria-labelledby="offcanvasChatListLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasChatListLabel">
                        Tin nhắn
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <ChatList setRoomId={setRoomId} />
                </div>
            </div>
        </>
    )
}
